import Footer from '@/components/Footer';
import { userLoginUsingPOST, userRegisterUsingPOST } from '@/services/oneapi/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, message, Tabs } from 'antd';
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
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
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
          {'登录'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="ONE API"
          subTitle={'基于 Spring Boot 的 API 开放平台'}
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
                <LoginMessage content={'错误的用户名和密码(admin/ant.design)'} />
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
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
