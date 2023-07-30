import Footer from '@/components/Footer';
import { userLoginUsingPOST, userRegisterUsingPOST } from '@/services/oneapi/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { LoginFormPage } from '@ant-design/pro-form/lib';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, Avatar, message, Tabs } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};
const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('loginTab');
  const { initialState, setInitialState } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => {
    return {
      height: 'calc(100vh - 100px)',
      margin: 0,
    };
  });

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };
  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPOST({
        ...values,
      });
      if (res.data) {
        const defaultLoginSuccessMessage = '登录成功';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      console.log(res.message);
      // 如果失败去设置用户错误信息
      setUserLoginState({
        status: 'error',
        type: 'account',
      });
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  const handleRegister = async (values: API.UserRegisterRequest) => {
    try {
      // 登录
      const res = await userRegisterUsingPOST(values);
      if (res.code === 200 && res.data) {
        message.success('注册成功');
        history.push('/');
        return;
      }
      message.error('注册失败：' + res.message);
      // 如果失败去重置用户错误信息
      setUserLoginState({
        status: 'error',
        type: 'account',
      });
    } catch (error) {
      console.log(error);
      message.error('注册失败，请重试');
    }
  };

  const { status, type: loginType } = userLoginState;

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'登录'} - {Settings.title}
        </title>
      </Helmet>

      <LoginFormPage
        backgroundImageUrl="https://bingw.jasonzeng.dev/"
        logo={<Avatar size={40} src={'/logo.jpeg'} />}
        title="One API"
        subTitle={'简易的 API 共享平台'}
        submitter={{
          searchConfig: {
            submitText: <>{type === 'loginTab' ? '登 录' : '注 册'}</>,
          },
        }}
        initialValues={{
          autoLogin: true,
        }}
        onFinish={async (values) => {
          if (type === 'loginTab') {
            await handleSubmit(values as API.UserLoginRequest);
          } else {
            await handleRegister(values as API.UserRegisterRequest);
          }
        }}
      >
        <Tabs
          activeKey={type}
          onChange={(tabType) => {
            setType(tabType);
          }}
          centered
          items={[
            {
              key: 'loginTab',
              label: '账户密码登录',
            },
            {
              key: 'registerTab',
              label: '注册新用户',
            },
          ]}
        />

        {type === 'loginTab' && (
          <>
            {status === 'error' && loginType === 'account' && (
              <LoginMessage content={'用户名或密码错误 (admin/12345678)'} />
            )}
            <ProFormText
              name="userAccount"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '用户名是必填项',
                },
              ]}
            />
            <ProFormText.Password
              name="userPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={'密码: 12345678'}
              rules={[
                {
                  required: true,
                  message: '密码是必填项',
                },
              ]}
            />

            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
                onClick={() => {
                  setType('registerTab');
                }}
              >
                新用户注册
              </a>
            </div>
          </>
        )}

        {type === 'registerTab' && (
          <>
            <ProFormText
              name="userAccount"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '用户名是必填项',
                },
                {
                  min: 4,
                  message: '用户名长度至少为4位',
                },
              ]}
            />
            <ProFormText.Password
              name="userPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={'用户密码'}
              rules={[
                {
                  required: true,
                  message: '密码是必填项',
                },
                {
                  min: 8,
                  message: '密码至少为8位',
                },
              ]}
            />
            <ProFormText.Password
              name="checkPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={'再次输入密码'}
              rules={[
                {
                  required: true,
                  message: '确认密码是必填项',
                },
                {
                  min: 8,
                  message: '密码至少为8位',
                },
              ]}
            />
          </>
        )}
      </LoginFormPage>
      <Footer />
    </div>
  );
};
export default Login;
