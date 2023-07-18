import {useModel} from '@@/exports';
import {
  CommentOutlined,
  FieldTimeOutlined,
  LockOutlined,
  UnlockOutlined,
  UserOutlined,
  VerifiedOutlined,
} from '@ant-design/icons';
import {PageContainer, ProFormInstance, ProFormText} from '@ant-design/pro-components';
import {Avatar, Button, Card, Col, Divider, message, Modal, Row, Typography,} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {
  checkUserAccountAndPasswordUsingPOST,
  getLoginUserUsingGET,
  updateSecretKeyUsingPOST
} from "@/services/oneapi/userController";
import {ProForm} from "@ant-design/pro-form/lib";
import moment from "moment";

const {Paragraph} = Typography;

const avatarStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};
const buttonStyle: React.CSSProperties = {
  marginLeft: '30px',
};

const Profile: React.FC = () => {
  const [data, setData] = useState<API.User>({});
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const {initialState, setInitialState, refresh} = useModel('@@initialState');
  const formRef = useRef<
    ProFormInstance<{
      userPassword: string;
    }>
  >();

  useEffect(() => {
    try {
      const currentUser = initialState?.currentUser;
      if (currentUser) {
        setData(currentUser);
        setImageUrl(currentUser.userAvatar);
      }
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  // 重置秘钥
  const resetSecretKey = async () => {
    try {
      let userPassword = formRef?.current?.getFieldValue('userPassword');
      // 登录
      const res = await checkUserAccountAndPasswordUsingPOST({
        userAccount: data?.userAccount,
        userPassword: userPassword,
      });
      if (res.code === 0 && res.data) {
        const res = await updateSecretKeyUsingPOST({
          id: data?.id,
        });
        if (res.data) {
          refresh();
          await getLoginUserUsingGET().then((json) => {
            const user = json.data;
            if (user) {
              setData(user);
            }
          });
          message.success('重置成功！');
          setOpen(false);
        }
      } else {
        message.error(res.message);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <PageContainer>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="个人信息" bordered={false}>
            <Row>
              <Col style={avatarStyle}>
                <Avatar
                  size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                  icon={imageUrl ? <img
                    src={data?.userAvatar}
                    alt="avatar"
                    style={{width: '100%', borderRadius: '50%'}}
                  /> : <UserOutlined/>}
                />
                {/*
                <Upload
                  name="file"
                  listType="picture-circle"
                  showUploadList={false}
                  action="/oneapi/avatar/upload"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                />*/}
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col>
                <UserOutlined/> 用户名称：{data?.userName}
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col>
                <CommentOutlined/> 用户账号：{data?.userAccount}
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col>
                <VerifiedOutlined/> 用户角色：{data?.userRole}
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col>
                <FieldTimeOutlined/> 注册时间：{ data?.createTime ? moment(data?.createTime).format('YYYY-MM-DD HH:mm:ss') : '' }
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="秘钥操作" bordered={false}>
            <Row>
              <Col>
                {visible ? (
                  <Paragraph
                    copyable={{
                      text: data?.accessKey,
                    }}
                  >
                    <LockOutlined/> accessKey：{data?.accessKey}
                  </Paragraph>
                ) : (
                  <Paragraph>
                    <UnlockOutlined/> accessKey：*********
                  </Paragraph>
                )}
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col>
                {visible ? (
                  <Paragraph
                    copyable={{
                      text: data?.secretKey,
                    }}
                  >
                    <LockOutlined/> secretKey：{data?.secretKey}
                  </Paragraph>
                ) : (
                  <Paragraph>
                    <UnlockOutlined/> secretKey：*********
                  </Paragraph>
                )}
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col>

                <Button
                  type="primary"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? <div>隐藏秘钥</div> : <div>查看秘钥</div>}
                </Button>

                <Button
                  style={buttonStyle}
                  onClick={() => {
                    setOpen(true);
                  }}
                  type="primary"
                  danger
                >
                  重置秘钥
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Modal
        title="重置秘钥"
        open={open}
        onOk={resetSecretKey}
        onCancel={() => setOpen(false)}
      >
        <ProForm<{
          userPassword: string;
        }>
          formRef={formRef}
          formKey="check-user-password-form"
          autoFocusFirstInput
          submitter={{
            resetButtonProps: {
              style: {
                display: 'none',
              },
            },
            submitButtonProps: {
              style: {
                display: 'none',
              },
            },
          }}
        >
          <ProFormText.Password name="userPassword" placeholder="请输入用户密码"/>
        </ProForm>
      </Modal>
    </PageContainer>
  );
};

export default Profile;
