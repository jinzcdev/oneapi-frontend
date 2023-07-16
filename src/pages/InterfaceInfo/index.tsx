import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {useParams} from "@@/exports";
import {getInterfaceInfoByIdUsingGET, invokeInterfaceInfoUsingPOST} from "@/services/oneapi/interfaceInfoController";
import {Badge, Button, Card, Descriptions, Form, Image, Input, message, Space} from "antd";
import moment from "moment";
import {defaultStyles, JsonView} from "react-json-view-lite";


const InterfaceInfo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [interfaceInfo, setInterfaceInfo] = useState<API.InterfaceInfo | undefined>(undefined);

  const [apiResult, setApiResult] = useState<string>("{}");
  const params = useParams<{ id: string }>();

  const handleInvoke = async (value: API.InterfaceInfoInvokeRequest) => {
    const hide = message.loading('调用中...');
    try {
      const res = await invokeInterfaceInfoUsingPOST(value);
      hide();
      if (res && res.code === 0) {
        message.success('调用成功');
        setApiResult(res.data ?? "");
        return true;
      }
      return false;
    } catch (error) {
      hide();
      message.error('调用失败');
      return false;
    }
  };

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
      <Space direction="vertical" size={20}>
        <Card title={interfaceInfo?.name}>
          {
            interfaceInfo ?
              <Descriptions bordered>
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
                  {
                    interfaceInfo.method === "GET" &&
                    ((interfaceInfo.requestParams?.trim() ?? "") === "" ? "无" : (interfaceInfo.url ?? "" + interfaceInfo.requestParams))
                  }
                  {
                    interfaceInfo.method === "POST"
                    && interfaceInfo.requestParams ?
                      <JsonView
                        data={JSON.parse(interfaceInfo.requestParams)}
                        shouldInitiallyExpand={() => true}
                        style={defaultStyles}/>
                      : ""
                  }
                </Descriptions.Item>
              </Descriptions> : ""
          }
        </Card>

        <Card title={'在线测试'}>
          <Form
            name="invoke"
            layout={"vertical"}
            onFinish={async (values) => {
              if (!interfaceInfo) {
                message.error("接口信息不存在");
                return;
              }
              await handleInvoke({
                id: interfaceInfo.id,
                requestParams: values.params,
              });
            }}
            onFinishFailed={() => {
            }}
          >
            <Form.Item
              label="请求参数"
              name="params"
            >
              <Input/>
            </Form.Item>

            <Button type="primary" htmlType="submit">
              调用
            </Button>

          </Form>
        </Card>

        <Card title={'返回结果'}>
          {
            // 如果返回的结果是图片地址，则使用 Image 组件展现
            // todo 应该改为使用特定的结果展示类型（如数据库中记录如何展示）来展示，而不是根据结果解析
            (apiResult.endsWith(".jpg") || apiResult.endsWith(".png")) ?
              <Image
                width={200}
                src={apiResult}
              /> :
              < JsonView
                data={JSON.parse(apiResult)}
                shouldInitiallyExpand={() => true}
                style={defaultStyles}/>
          }
        </Card>
      </Space>
    </PageContainer>
  );
};

export default InterfaceInfo;
