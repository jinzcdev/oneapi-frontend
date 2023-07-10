import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns, ProDescriptionsItemProps} from '@ant-design/pro-components';
import {PageContainer, ProDescriptions, ProTable,} from '@ant-design/pro-components';
import '@umijs/max';
import {Button, Drawer, message} from 'antd';
import React, {useRef, useState} from 'react';
import UpdateForm from './components/UpdateForm';
import {
  addInterfaceInfoUsingPOST,
  deleteInterfaceInfoUsingPOST,
  listInterfaceInfoByPageUsingGET,
  updateInterfaceInfoUsingPOST
} from "@/services/oneapi/interfaceInfoController";
import CreateModal from "@/pages/InterfaceInfo/components/CreateForm";
// import InterfaceInfoUpdateRequest = API.InterfaceInfoUpdateRequest;


/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param value
 */
const handleAdd = async (value: API.InterfaceInfo) => {
  const res = await addInterfaceInfoUsingPOST(value);
  try {
    if (res && res.code === 0) {
      message.success('添加成功');
      return true;
    } else {
      message.error('添加失败，' + res.message);
      return false;
    }
  } catch (error) {
    message.error('添加失败，' + error);
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param value
 */
const handleUpdate = async (value: any) => {
  const hide = message.loading('更新中...');
  try {
    const res = await updateInterfaceInfoUsingPOST(value);
    hide();
    if (res && res.code === 0) {
      message.success('更新接口信息');
      return true;
    }
    return false;
  } catch (error) {
    hide();
    message.error('更新失败');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.InterfaceInfo[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    for (const row of selectedRows) {
      await deleteInterfaceInfoUsingPOST({
        id: row.id,
      });
    }
    hide();
    message.success('删除成功！');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败！');
    return false;
  }
};
const APITableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InterfaceInfo>();
  const [selectedRowsState, setSelectedRows] = useState<API.InterfaceInfo[]>([]);


  const columns: ProColumns<API.InterfaceInfo>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'index',
      fixed: 'left',
      width: 50,
    },
    {
      title: '接口名称',
      dataIndex: 'name',
      valueType: 'text',
      width: 100,
      formItemProps: {
        rules: [{
          required: true,
        }]
      },
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'url',
      dataIndex: 'url',
      valueType: 'text',
      width: 100,
      ellipsis: true,
    },
    {
      title: '请求参数',
      dataIndex: 'requestParams',
      valueType: 'jsonCode',
      width: 400,
    },
    {
      title: '请求方法',
      dataIndex: 'method',
      valueType: 'text',
      width: 50,
      ellipsis: true,
    },
    {
      title: '请求头',
      dataIndex: 'requestHeader',
      valueType: 'jsonCode',
      width: 250,
    },
    {
      title: '响应头',
      dataIndex: 'responseHeader',
      valueType: 'jsonCode',
      width: 250,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      width: 80,
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
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 180,
      fixed: 'right',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,
        record.status === 0 ? <Button
          type="link"
          key="config"
          onClick={() => {
            // handleOnline(record);
          }}
        >
          发布
        </Button> : <Button
          type="text"
          danger
          key="config"
          onClick={() => {
            // handleOffline(record);
          }}
        >
          下线
        </Button>,
        <Button
          type="text"
          danger
          key="config"
          onClick={async () => {
            await handleRemove([record]);
          }}
        >
          删除
        </Button>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.InterfaceInfo, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        scroll={{x: 1900}}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined/> 新建
          </Button>,
        ]}
        request={async (params) => {
          const res = await listInterfaceInfoByPageUsingGET(params);
          if (res && res.data) {
            return {
              success: true,
              data: res.data.records,
              total: res.data.total
            }
          } else {
            return {
              success: false,
              data: undefined,
              total: 0
            }
          }
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />

      <CreateModal
        columns={columns}
        onCancel={() => {
          handleModalOpen(false);
        }}
        onSubmit={
          async (values) => {
            const res = await handleAdd(values);
            if (res) {
              handleModalOpen(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
        open={createModalOpen}/>
      <UpdateForm
        onSubmit={async (value) => {
          const data = {...value, id: currentRow?.id};
          console.log(data);
          const success = await handleUpdate(data);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        values={currentRow || {}}
        open={updateModalOpen}
        columns={columns}/>

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};
export default APITableList;
