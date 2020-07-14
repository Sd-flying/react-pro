import React,{Component} from 'react'
import {Form, Card, Input, Modal, Button, Checkbox, Icon} from 'antd';
import './index.less'
import {addILoginName} from "../../redux/actions";
import { connect } from 'react-redux';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 15 },
}
const tailLayout = {
    wrapperCol: { offset: 4, span: 14 },
}

const submitLayout = {
    wrapperCol: { offset: 12, span: 14 },
}

class Login extends Component {

    state = {
        visibleModal: false,
        visibleModal2: false

    }

    // 提交按钮
    onSubmit = (e)=> {
        e.preventDefault(); //必须的，阻止事件的默认行为

        // 校验form表单的字段
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values)
            }
        })

        // 获取登录表单的值
        var users = this.props.form.getFieldValue('username')
        var password = this.props.form.getFieldValue('password')

        //向redux中存入LoginName
        const { dispatch }= this.props;
        dispatch(addILoginName(users))

        // 页面校验登录名和密码
        if(users === '赵大猪蹄子' && password === '123') {
            this.countDown()
        }
        // else {
            // this.setState({
            //     visibleModal: true
            // });
        // }

    }

    countDown = ()=> {
        let secondsToGo = 3;
        const modal = Modal.success({
            title: '恭喜您，答对啦',
            content: `文采飞扬的您，将于 ${secondsToGo} 秒后进入系统！`,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            modal.update({
                content: `文采飞扬的您，将于 ${secondsToGo} 秒后进入系统！`,
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
            modal.destroy();
            this.props.history.push('/admin/home')
        }, secondsToGo * 1000);
    }

     onFinish = values => {
         console.log('Success:', values);
     };

     onFinishFailed = errorInfo => {
         console.log('Failed:', errorInfo);
     };

    handleOk = ()=> {
        this.setState({ visibleModal: false})
    }

    handleCancel  = e=> {
            this.setState({
                visibleModal: false,
            });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        this.getFieldsValue = this.props.form.getFieldsValue;//获得表单所有控件的值
        return (
            <div>
                <Card className='cardLlogin'>
                    <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    onClick={this.onSubmit}
                    className={{width: 100}}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                    >
                        {
                            getFieldDecorator('username', {
                                rules: [{required: true, message: '请填写用户名'}]
                            })(
                                <Input prefix={<Icon type="username" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )
                        }

                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                    >
                        {
                            getFieldDecorator('password', {
                                rules: [{required: true, message: '请填写密码'}]
                            })(
                                <Input.Password prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                            )
                        }
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...submitLayout}>
                        <Button type="primary" htmlType="submit" style={{color: 'rgb(255, 255, 255)',backgroundColor: 'rgb(75, 71, 60)',border: 'none'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </Card>
                <Modal
                    title='请给你的男朋友起外号'
                    visible={this.state.visibleModal}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <h1>校验失败</h1>
                    <p style={{color: 'rgb(255,0,0)'}}>该昵称与实物不符，请重试！</p>
                </Modal>
            </div>
        )
    }
}

export default Form.create({})(connect()(Login))
