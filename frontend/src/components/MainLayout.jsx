import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#000000',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#ffffff',
};
const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
};
const footerStyle = {
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '#ffffff',
};
const layoutStyle = {
  minHeight: "100vh",
};
const MainLayout = ({children}) => (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <h1>5G DashBoard</h1>
      </Header>
      <Content style={contentStyle}>
        {children}
      </Content>
      <Footer style={footerStyle}>©{new Date().getFullYear()} For NISTU 5G Lab</Footer>
    </Layout>
);
export default MainLayout;