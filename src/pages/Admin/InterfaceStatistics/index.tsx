import React, {useEffect, useState} from 'react';
import {Pie} from '@ant-design/plots';
import {PageContainer} from "@ant-design/pro-components";
import {getInterfaceStatisticsUsingGET} from "@/services/oneapi/userInterfaceInfoController";
import {message} from "antd";

type dataType = {
  type: string,
  value: number
};

const InterfaceStatistics: React.FC = () => {

  const [data, setData] = useState<dataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInterfaceStatistics = async () => {
    const res = await getInterfaceStatisticsUsingGET();
    try {
      if (res.code === 200 && res.data) {
        const list: dataType[] = res.data.map((item: API.InterfaceInvokeInfoVo) => {
          return {
            type: item.name,
            value: item.totalNum
          } as dataType;
        });
        return list;
      }
    } catch (e) {
      message.error('请求失败！');
    }
    return undefined;
  };

  useEffect(() => {
    fetchInterfaceStatistics().then(data => {
      setData(data ?? []);
      setLoading(false);
    });
  }, []);

  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return <PageContainer title={"接口调用统计"} loading={loading}>
    <Pie {...config} />
  </PageContainer>;
};

export default InterfaceStatistics;
