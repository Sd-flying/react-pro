import React, { Component } from 'react';
import {Form, Input, InputNumber, Button, Card, Icon} from 'antd';


const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
};

// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not validate email!',
//         number: '${label} is not a validate number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// };


class LoginRegister extends Component {
    constructor(props) {
        super(props);

    }
    // 提交按钮
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    onFinish = values => {
        console.log(values);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish}>
                    <Form.Item label="Name">
                        {
                            getFieldDecorator('name', {
                                rules: [{required: true, message: '请填写用户名'}]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="Email">
                        {
                            getFieldDecorator('email', {
                                rules: [{required: true, message: '请填写邮箱'}]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="Age">
                        {
                            getFieldDecorator('age', {
                                rules: [{required: true, message: '请填写年龄'}]
                            })(
                                <InputNumber prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请填写年龄" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="Website">
                        {
                            getFieldDecorator('website', {
                                rules: [{required: true, message: '请填写web地址'}]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请填写web地址" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="Introduction">
                        {
                            getFieldDecorator('introduction', {
                                rules: [{required: true, message: '请填写简介'}]
                            })(
                                <Input.TextArea prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请填写简介" />
                            )
                        }
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        )
    }
}
export default Form.create({})(LoginRegister)
