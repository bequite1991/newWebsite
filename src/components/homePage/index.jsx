import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Carousel } from 'antd';
import CarouselComponent from './content'
import './index.scss';

const { SubMenu } = Menu;
const { Header, Content,Footer, Sider } = Layout;



export default class homePage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		    current: 'mail',
		}
	}
	render() {
		return(
			<Layout className="layout">
			    <Header>
			      <div className="logo" />
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['2']}
			        style={{ lineHeight: '64px' }}
			      >
			        <Menu.Item key="1">首页</Menu.Item>
			        <Menu.Item key="2">最新产品</Menu.Item>
			        <Menu.Item key="3">关于我们</Menu.Item>
			      </Menu>
			    </Header>
			    <Content>
			      <CarouselComponent />
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      Ant Design ©2016 Created by Ant UED
			    </Footer>
			 </Layout>
			)
	}
}
