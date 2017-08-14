import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css';
import Index from './components/index';

import ListPeople from './components/people/compoments/list';
import SearcgPeople from './components/people/compoments/search';
import SynchronizePeople  from './components/people/compoments/synchronize';

import ListMeta from './components/meta/components/list';
import SearchMeta from './components/meta/components/search';
import CreateMeta from './components/meta/components/create';
import VerifyMeta from './components/meta/components/verify';

import ListEvent from './components/evnet/components/list';
import CreateEvent from './components/evnet/components/create';
import SearchEvent from './components/evnet/components/search';

import ChangePassword from './components/user/components/change_password';

import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paths: []
        };
    }

    render() {

        const user_menu = (
            <Menu>
                <Menu.Item key="0"><Icon type="key" style={{ color: '#000', marginRight: '1em'  }} />  修改密码</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2"><Icon type="logout" style={{ color: '#000', marginRight: '1em'  }} /> 退出</Menu.Item>
            </Menu>
        );

        const breadcrumb = this.state.paths.map((p, k) => {
            return <Breadcrumb.Item key={k}>{p}</Breadcrumb.Item>
        });

        return (
            <div className="App">
                <Router>
                    <Layout style={{ minHeight: '100vh'  }}>
                        <Header className="header">
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px', paddingLeft: '150px' }}
                            >
                                <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                                <Menu.Item key="2" style={{ float: 'right' }}>
                                    <Dropdown overlay={user_menu}>
                                        <a className="ant-dropdown-link"> 管事的 <Icon type="down" /></a>
                                    </Dropdown>
                                </Menu.Item>
                            </Menu>
                        </Header>
                        <Layout>
                            <Sider width={200}>
                                <Menu
                                    mode="inline"
                                    theme="default"
                                    defaultSelectedKeys={[]}
                                    defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4']}
                                    style={{ height: '100%', borderRight: 0 }}
                                >
                                    <SubMenu key="sub1" title={<span><Icon type="team" />人口信息</span>}>
                                        <Menu.Item key="1"><Link to="/people/list"  onClick={ () => this.setState({ paths: ['人口信息', '人口列表'] })  } >人口列表</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/people/search"  onClick={ () => this.setState({ paths: ['人口信息', '查找'] })  } >查找</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/people/synchronize"  onClick={ () => this.setState({ paths: ['人口信息', '同步'] })  } >同步</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="laptop" />元信息</span>}>
                                        <Menu.Item key="4"><Link to="/meta/list"  onClick={ () => this.setState({ paths: ['元信息', '元信息列表'] })  } >元信息列表</Link></Menu.Item>
                                        <Menu.Item key="5"><Link to="/meta/search"  onClick={ () => this.setState({ paths: ['元信息', '查找元信息'] })  } >查找元信息</Link></Menu.Item>
                                        <Menu.Item key="6"><Link to="/meta/create"  onClick={ () => this.setState({ paths: ['元信息', '创建元信息'] })  } >创建元信息</Link></Menu.Item>
                                        <Menu.Item key="7"><Link to="/meta/verify"  onClick={ () => this.setState({ paths: ['元信息', '待审核'] })  } >待审核</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" title={<span><Icon type="notification" />事件评分记录</span>}>
                                        <Menu.Item key="8"><Link to="/event/list"  onClick={ () => this.setState({ paths: ['事件', '事件列表'] })  } >事件列表</Link></Menu.Item>
                                        <Menu.Item key="9"><Link to="/event/search"  onClick={ () => this.setState({ paths: ['事件', '查找事件'] })  } >查找事件</Link></Menu.Item>
                                        <Menu.Item key="10"><Link to="/event/create"  onClick={ () => this.setState({ paths: ['事件', '创建事件'] })  } >创建事件</Link></Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub4" title={<span><Icon type="user" />帐号设置</span>}>
                                        <Menu.Item key="0"><Link to="/user/change_password" onClick={ () => this.setState({ paths: ['修改密码'] }) } >修改密码</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '0 24px 24px' }}>
                                <Breadcrumb style={{ margin: '12px 0' }}>
                                    <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                                    { breadcrumb }
                                </Breadcrumb>
                                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                    <Route exact path="/" component={ Index }  />

                                    <Route path="/people/list" component={ ListPeople } />
                                    <Route path="/people/search" component={ SearcgPeople } />
                                    <Route path="/people/synchronize" component={ SynchronizePeople } />

                                    <Route path="/meta/list" component={ ListMeta } />
                                    <Route path="/meta/search" component={ SearchMeta } />
                                    <Route path="/meta/create" component={ CreateMeta } />
                                    <Route path="/meta/verify" component={ VerifyMeta } />

                                    <Route path="/event/list" component={ ListEvent } />
                                    <Route path="/event/search" component={ SearchEvent } />
                                    <Route path="/event/create" component={ CreateEvent } />

                                    <Route path="/user/change_password" component={ ChangePassword } />
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
