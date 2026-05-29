import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Helmet from '../icons/Helmet';
import Drone from '../icons/Drone';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  LineChartOutlined,
  MobileOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};
const items = [
{
    key: 'smart-cams',
    icon: <VideoCameraOutlined />,
    label: 'Smart Cameras',
},
{
    key: 'smart-helmets',
    icon: <Helmet />,
    label: 'Smart Helmets',
},
{
    key: '5G-smart-phones',
    icon: <MobileOutlined />,
    label: '5G Smart Phones',
},
{
    key: '5G-drones',
    icon: <Drone />,
    label: '5G Drones',
},
{
    key: 'iiot',
    icon: <LineChartOutlined />,
    label: 'IIoT',
},
]

const MainDash = () => {
const navigate = useNavigate();
const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical">
        </div>
        <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={['smart-cams']} 
            items={items}
            onClick={({ key }) => navigate(key)} 
            />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Username' }]} />
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Made by G Rahul Reddy ©{new Date().getFullYear()} For NISTU 5G Lab
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainDash;