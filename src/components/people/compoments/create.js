import React, { Component } from 'react';
import { Form, Input, Select, Button, Icon, Spin, message } from 'antd';
import fetch  from '../utils/fetch';

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


class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posting: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {

            if (err) {return;}

            const name = values.name;
            const sex  = values.sex;
            const id   = values.id_number;
            const address = values.address;

            this.setState({
                posting: true
            });

            fetch.createPerson(name, sex, id, address).then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw "创建失败";
            }).then(data => {
                if (data.code != 4025) {
                    throw data.desc;
                }

                message.success("创建成功");

                this.setState({ posting: false });
                this.props.form.resetFields();
            }).catch(e => {
                message.error(e);
                this.setState({ posting: false });
            });

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return <div>

            <Spin spinning={ this.state.posting } tip="创建中">
                <Form onSubmit={ this.handleSubmit.bind(this) }>
                    <FormItem
                        {...formItemLayout}
                        label="姓名"
                        hasFeedback
                    >
                        { getFieldDecorator('name', {
                              rules: [{ required: true, message: '请输入姓名!' }],
                        })(
                              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="再次输入姓名" />
                          )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="性别"
                        hasFeedback
                    >

                        { getFieldDecorator('sex', {
                              rules: [{ required: true, message: '请选择性别!' }],
                        })(
                              <Select id="sex" help="请选择性别" prefix={<Icon type="user" style={{ fontSize: 13 }} />}>
                                  <Option value="0">男</Option>
                                  <Option value="1">女</Option>
                              </Select>
                          )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="身份证号码"
                        hasFeedback
                    >
                        {getFieldDecorator('id_number', {
                             rules: [{ required: true, message: '请输入身份证号码!'}, { pattern: new RegExp('^\\d{14}(\\d|X|\\d{4}|\\d{3}X)$', 'i'), message:'请输入正确的身份证号!' }]
                        })(
                             <Input prefix={<Icon type="credit-card" style={{ fontSize: 13 }} />}  placeholder="身份证号码" id="id_number" />
                         )}

                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="住址"
                        hasFeedback
                        help="请输入住址"
                    >
                        { getFieldDecorator('address', {
                              rules: [{required: true, message: '请输入身份证号码!'}]
                        })(
                              <Input prefix={<Icon type="home" style={{ fontSize: 13 }} />}  placeholder="在此输入住址" id="address" />
                          )}

                    </FormItem>
                    <FormItem wrapperCol={{ offset: 5 }}>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </Spin>
        </div>;
    }
}
export default Form.create()(Create);
