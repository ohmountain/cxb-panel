import React, { Component } from 'react';
import { Form, Input, DatePicker, Col, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option   = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};


export default class Create extends Component {

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        return <div>

            <Form onSubmit={ this.handleSubmit.bind(this) }>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                    validateStatus=""
                    help="请输入姓名"
                >
                    <Input placeholder="请在此输入姓名" id="name" />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="性别"
                    validateStatus=""
                    help="请选择性别"
                >
                    <Select id="sex" help="请选择性别">
                        <Option value="0">男</Option>
                        <Option value="1">女</Option>
                    </Select>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="身份证号码"
                    validateStatus=""
                    help="请输入身份证号码"
                >
                    <Input placeholder="身份证号码" id="id_number" />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="住址"
                    hasFeedback
                    validateStatus=""
                    help="请输入住址"
                >
                    <Input placeholder="在此输入住址" id="address" />
                </FormItem>
                <FormItem wrapperCol={{ offset: 5 }}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </FormItem>
            </Form>
        </div>;
    }
}
