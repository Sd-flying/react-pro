import React, { Component } from 'react'
import { Button, Modal, Table, Card, Tag, Divider, Form, Icon, Input, Select, InputNumber } from 'antd'
import './index.less'
import axios from "axios";
import './index.less'

import '../../mock'
const { Option } = Select;
const { confirm } = Modal;



const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};

const tailFormItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};

class Buttons extends Component {
    state = {
        person: [],
        visible: false,
        title: '新增信息'
    }

    columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '工作',
            dataIndex: 'job',
            key: 'job',
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
            <span>
                <Button type="link" onClick={this.openEdit}>编辑</Button>
                <Divider type="vertical" />
                <Button type="link" onClick={this.deleteInfo}>删除</Button>
            </span>
            ),
        },
    ];

    componentDidMount() {
        axios.get('/mock', {dataType: 'json'}) //这列的'/mock'与mock.js文件里的地址一致
            .then(res => {

                this.setState({person: res.data.userinfo})
                console.log(this.state.person)
            })
    }
    // 编辑数据
    openEdit = () => {
        this.setState({visible: true})
        this.setState({
            title: ''
        })
    }
    // 提交表单
    handleSubmit = (e) => {
        e.preventDefault(); //组织事件的默认行为
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    visible: false,
                });
                this.props.form.resetFields();
            }else {
                this.setState({
                    visible: true,
                });
            }
        });
    }

    //hideModal
    hideModal = ()=> {
        this.setState({
            visible: false,
        });
        this.props.form.resetFields();
    }

    handleChange = () => {
        console.log('handleChange')
    }

    onChange = ()=> {
        console.log('onChange')
    }
    // 新增
    addInfo = ()=> {
        this.setState({
            title: '新增信息'
        })
        this.setState({
            visible: true
        })
    }

    //删除
    deleteInfo = () => {
        confirm({
                title: '确定要删除该条信息吗?',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="echartsSty">
                <Card>
                    <Button type='primary' onClick={this.addInfo}>新增信息</Button>
                </Card>

                <Card>
                    <Table rowKey={record => record.id} dataSource={this.state.person} columns={this.columns} />
                </Card>

                <Modal
                    title={this.state.title}
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <Form {...layout} className="login-form">
                        <Form.Item label='姓名'>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '姓名不能为空' }],
                            })(
                                <Input/>,
                            )}
                        </Form.Item>
                        <Form.Item label='年龄'>
                            {getFieldDecorator('age', {
                                rules: [{ required: true, message: '年龄不能为空' }],
                                initialValue: '3'
                            })(
                                <InputNumber min={1} max={10} onChange={this.onChange} />
                            )}
                        </Form.Item>
                        <Form.Item label='性别'>
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: '性格不能为空' }],
                                initialValue: '男'
                            })(
                                <Select onChange={this.handleChange}>
                                    <Option value="nan">男</Option>
                                    <Option value="nv">女</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label='工作'>
                            {getFieldDecorator('job', {
                                rules: [{ required: true, message: '工作不能为空' }],
                                initialValue: 'web'
                            })(
                                <Select onChange={this.handleChange}>
                                    <Option value="web">web</Option>
                                    <Option value="java">java</Option>
                                    <Option value="teacher">teacher</Option>
                                    <Option value="python">python</Option>
                                    <Option value="php">php</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Form.create({})(Buttons)
