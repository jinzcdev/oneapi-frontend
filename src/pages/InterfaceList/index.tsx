import { listInterfaceInfoVOByPageUsingPOST } from '@/services/oneapi/interfaceInfoController';
import { addUserInterfaceInfoUsingPOST } from '@/services/oneapi/userInterfaceInfoController';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Layout, message } from 'antd';
import Search from 'antd/es/input/Search';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useRef, useState } from 'react';
import { history } from 'umi';

const headerStyle: React.CSSProperties = {
  height: '64px',
  paddingInline: '30%',
  lineHeight: '64px',
  background: 'inherit',
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  lineHeight: '120px',
};

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfoVO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const ref = useRef<ActionType>();
  const { initialState } = useModel('@@initialState');

  const loadData = async (searchText = '', current = 1, pageSize = 10) => {
    setLoading(true);
    try {
      const params = {
        current,
        pageSize,
      };
      if (searchText) {
        Object.assign(params, {
          name: searchText,
          description: searchText,
        });
      }
      await listInterfaceInfoVOByPageUsingPOST(params).then((res) => {
        setList(res?.data?.records ?? []);
        setTotal(res?.data?.total ?? 0);
      });
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  };

  /**
   * table 展示的列
   * */
  const columns: ProColumns<API.InterfaceInfoVO>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'index',
      align: 'center',
    },
    {
      title: '接口名称',
      dataIndex: 'name',
      valueType: 'text',
      align: 'center',
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      align: 'center',
    },
    {
      title: '请求方法',
      dataIndex: 'method',
      valueType: 'text',
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '开启',
          status: 'Processing',
        },
      },
      align: 'center',
    },
    {
      title: '发布时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return record.isOwnerByCurrentUser ? (
          <Button
            type="primary"
            key="onlineUse"
            onClick={() => {
              history.push(`/interface-info/${record.id}`);
            }}
          >
            在线调用
          </Button>
        ) : (
          <Button
            key="applyInterface"
            onClick={async () => {
              const userId = initialState?.currentUser?.id;
              if (!userId) {
                message.success('请重新登录');
              }
              const res = await addUserInterfaceInfoUsingPOST({
                interfaceInfoId: record.id,
                userId: userId,
              });
              if (res.code === 200) {
                message.success('申请成功');
                // 刷新表格
                await loadData();
              } else {
                message.error(res.message);
              }
            }}
          >
            开通接口
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = (value: string) => {
    loadData(value);
  };

  return (
    <PageContainer>
      <Layout>
        <Header style={headerStyle}>
          <Search
            size={'large'}
            placeholder="请输入接口名称或描述"
            onSearch={onSearch}
            enterButton
          />
        </Header>
        <Content style={contentStyle}>
          <ProTable<API.InterfaceInfoVO>
            rowKey="id"
            toolBarRender={false}
            columns={columns}
            dataSource={list}
            loading={loading}
            actionRef={ref}
            pagination={{
              showTotal: (total) => {
                return '总数：' + total;
              },
              total,
              pageSize: 10,
              onChange: (page, pageSize) => {
                loadData('', page, pageSize);
              },
            }}
            search={false}
          />
        </Content>
      </Layout>
    </PageContainer>
  );
};

export default Index;
