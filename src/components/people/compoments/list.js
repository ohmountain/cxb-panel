import React, { Component } from 'react';
import { Table, Pagination, message, Popconfirm } from 'antd';

import fetch from './../utils/fetch';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            dataSource: [],
            page: 1,
            allCount: 1,
            pageSize: 20,
        }


        this.columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render: (text, record, index) => text == 0 ? '男' : '女'

        }, {
            title: '身份证号码',
            dataIndex: 'id_number',
            key: 'id_number'
        }, {
            title: '地址',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return <Popconfirm title="删除" onConfirm={ () => {
                    this.setState({ loading: true });
                    setTimeout(() => {
                        const data = this.state.dataSource;
                        data.splice(index, 1);
                        this.setState({loading: false,dataSource: data})
                    }, 600);
                }}><a>删除</a></Popconfirm>
            }
        }];

    }

    componentDidMount() {
        this.fetchPeople(1, this.state.pageSize);
    }

    handlePagerChange(page, pageSize) {
        this.fetchPeople(page, pageSize);
    }

    fetchPeople(page = 1, pageSize = 20) {
        fetch.getPeople(page, pageSize).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw "fetch error";
        }).then(data => {
            const dataSource = data.persons.map(p => { p.key = p.id; return p; });

            if (data.success === 'Failure') {
                message.error("获取数据失败");
            } else {
                message.success("获取数据成功");
            }

            this.setState({
                loading: false,
                dataSource,
                page: data.page,
                allCount: data.max_count,
                pageSize
            });

        }).catch(e => {
            this.setState({loading: false});

            message.error("获取数据失败");
        });
    }

    render() {
        return <div>
            <Table
                bordered={ true }
                loading={ this.state.loading }
                dataSource={ this.state.dataSource }
                columns={ this.columns }
                pagination={{
                    current: this.state.page,
                    total: this.state.allCount,
                    pageSize: this.state.pageSize,
                    onChange: this.handlePagerChange.bind(this),
                    showQuickJumper: true
                }} >
            </Table>
        </div>;
    }
}
