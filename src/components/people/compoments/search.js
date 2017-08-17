import React, { Component } from 'react';
import { Form, Input, Col } from 'antd';
const FormItem = Form.Item;

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

export default class Search extends Component {
    render() {
        return <div>人口查询页</div>;
    }
}
