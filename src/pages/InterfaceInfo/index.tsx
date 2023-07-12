import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {useParams} from "@@/exports";
import {getInterfaceInfoByIdUsingGET} from "@/services/oneapi/interfaceInfoController";
import {Badge, Card, Descriptions, message} from "antd";
import moment from "moment";
import {defaultStyles, JsonView} from "react-json-view-lite";


const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [interfaceInfo, setInterfaceInfo] = useState<API.InterfaceInfo | undefined>(undefined);

  const params = useParams<{ id: string }>();

  const loadData = async (): Promise<API.InterfaceInfo | undefined> => {
    setLoading(true);
    const res = await getInterfaceInfoByIdUsingGET({id: Number(params.id)});
    try {
      if (res.code === 0 && res.data) {
        setLoading(false);
        return res.data;
      }
    } catch (e) {
      message.error('请求失败！');
    }
    setLoading(false);
    return undefined;
  };

  useEffect(() => {
    loadData().then(data => {
      setInterfaceInfo(data);
    });
  }, [])

  return (
    <PageContainer title={"接口详情"} loading={loading}>
      <Card>
        {
          interfaceInfo ?
            <Descriptions title={interfaceInfo.name} bordered>
              <Descriptions.Item label="请求地址">{interfaceInfo.url}</Descriptions.Item>
              <Descriptions.Item label="描述" span={2}>{interfaceInfo.description}</Descriptions.Item>
              <Descriptions.Item label="请求方法">{interfaceInfo.method}</Descriptions.Item>
              <Descriptions.Item
                label="创建时间">{moment(interfaceInfo.createTime).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
              <Descriptions.Item label="更新时间" span={2}>
                {moment(interfaceInfo.updateTime).format('YYYY-MM-DD HH:mm:ss')}
              </Descriptions.Item>
              <Descriptions.Item label="接口状态" span={3}>
                <Badge status={interfaceInfo.status === 1 ? "success" : "error"}
                       text={interfaceInfo.status === 1 ? "正常" : "下线"}/>
              </Descriptions.Item>
              <Descriptions.Item label="请求头">{interfaceInfo.requestHeader}</Descriptions.Item>
              <Descriptions.Item label="响应头">{interfaceInfo.responseHeader}</Descriptions.Item>
              <Descriptions.Item label="价格">免费</Descriptions.Item>
              <Descriptions.Item label="请求参数">
                {interfaceInfo.requestParams ?
                  <JsonView
                    data={JSON.parse(interfaceInfo.requestParams)}
                    shouldInitiallyExpand={() => true}
                    style={defaultStyles}/>
                  : ""}
              </Descriptions.Item>
            </Descriptions> : ""
        }
      </Card>
    </PageContainer>
  );
};

export default Index;
