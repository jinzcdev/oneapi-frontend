import React from 'react';

import { listInterfaceInfoVOUsingGET } from '@/services/oneapi/interfaceInfoController';
import { rechargeUserInterfaceInvokeCountUsingPOST } from '@/services/oneapi/userInterfaceInfoController';
import { PageContainer, ProForm, ProFormText } from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-form/lib';
import { message } from 'antd';

const InterfaceRecharge: React.FC = () => {
  return (
    <PageContainer title={'接口充值'} loading={false}>
      <ProForm<{
        userAccount: string;
        interfaceId: number;
        rechargeCount: number;
      }>
        layout={'vertical'}
        submitter={{
          render: (props, doms) => {
            return doms;
          },
        }}
        onFinish={async (values) => {
          console.log(values);
          rechargeUserInterfaceInvokeCountUsingPOST({
            interfaceId: values.interfaceId,
            rechargeCount: values.rechargeCount,
            userAccount: values.userAccount,
          }).then((res) => {
            if (res.code === 200) {
              message.success('充值成功');
            } else {
              message.success('充值失败：' + res.message);
            }
          });
        }}
      >
        <ProFormText
          name="userAccount"
          width="md"
          label="充值账户"
          placeholder="请输入用户名"
          rules={[{ required: true }]}
        />
        <ProFormSelect
          showSearch={true}
          width="md"
          name="interfaceId"
          label="接口名称"
          placeholder="请输入接口名称"
          request={async () => {
            // 通过接口获取数据
            const res = await listInterfaceInfoVOUsingGET();
            if (res.code === 200 && res.data) {
              return res.data.map((item: API.InterfaceInfoVO) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              });
            }
            return [];
          }}
          rules={[{ required: true }]}
        />
        <ProFormText
          width="md"
          name="rechargeCount"
          label="接口充值次数"
          rules={[
            {
              required: true,
              message: '请输入充值次数',
            },
            {
              validator: async (_, value) => {
                if (value < 0) {
                  return Promise.reject(new Error('充值次数不能小于0'));
                }
                return Promise.resolve();
              },
            },
          ]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default InterfaceRecharge;
