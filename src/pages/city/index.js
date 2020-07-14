import React, { Component } from 'react';
import { Form, Spin, Button, Card, Table, Select, Modal, message } from 'antd';
const { Option } = Select;
const dateFormat = require('js-dateformat').dateFormat;

/**
 * 城市管理
 * @type {*[]}
 */
const columns = [
    {title:'城市ID', dataIndex: 'id'},
    {title:'城市名称', dataIndex: 'name'},
    {
        title:'用车模式',
        dataIndex: 'mode',
        render(mode) {
            return mode == 1 ? '指定停车点模式' : '禁停区模式'
        }
    },
    {
        title:'营运模式',
        dataIndex: 'op_mode',
        render(mode) {
            return mode == 1 ? '自营' : '加盟'
        }
    },
    {title:'授权加盟商', dataIndex: 'franchisee_name'},
    {
        title:'城市管理员',
        dataIndex: 'city_admins',
        render(arr) {
            return arr.map(item => {
                return item.user_name;
            }).join(',')
        }
    },
    {title:'城市开通时间', dataIndex: 'open_time'},
    {
        title:'操作时间',
        dataIndex: 'update_time',
        render(time) {
            return dateFormat(new Date(time), 'yyyy-mm-dd HH:MM:ss')
        }
    },
    {title:'操作人', dataIndex: 'sys_user_name'}
]

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [], //table
            loading: true, //是否显示加载数据
            total: 0, //总条数
            visibleModal: false //开通城市弹窗
        }
    }

    pages = {
        page: 1
    }

    componentDidMount() {
        this.initData();
    }

    //开通城市
    handleOpenCity = () => {
        this.setState({
            visibleModal: true
        })
    }
    handleCitySubmit = () => {
        let formData = this.cityForm.props.form.getFieldsValue();
        global.$get('onOpenCity',formData).then(res => {
            if(res.code == 0) {
                message.success('开通成功');
                this.initData();
                this.setState({
                    visibleModal: false
                })
            }
        })
    }
    //关闭弹窗
    modalCanel = () => {
        this.setState({
            visibleModal: false
        })
    }

    //初始化数据
    initData = () => {
        global.$get('getOpenCity',this.pages).then(res => {
            if(res.code != 500) {
                const list = res.result.item_list;
                this.setState({
                    list: list.map((item, index) => {
                        item.key = index;
                        return item;
                    }),
                    loading: false,
                    total: res.result.total_count
                })
            }
        })
    }

    //分页
    onPages = (page) => {
        this.pages.page = page;
        this.setState({
            loading: true
        })
        this.initData();
    }

    render() {
        return (
            <div className="city">
                <Card>
                    <SearchForm></SearchForm>
                </Card>
                <Card style={{marginTop: 20, borderBottom: 'none'}}>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <Modal
                    visible={this.state.visibleModal}
                    title="开通城市"
                    onCancel={this.modalCanel}
                    onOk={this.handleCitySubmit}>
                    <OpenCityAlert wrappedComponentRef={(form) => {this.cityForm = form}} />
                </Modal>
                <Spin spinning={this.state.loading} tip="Loading..." delay={500}>
                    <div className="table-wrap">
                        <Table
                            border
                            columns={columns}
                            dataSource={this.state.list}
                            pagination={
                                {total: this.state.total, onChange: this.onPages}
                            } />
                    </div>
                </Spin>
            </div>
        )
    }
}

//搜索
class FilterForm extends Component {
    render() {

        //getFieldDecorator 用于和表单进行双向绑定，其中
        // 经过 getFieldDecorator 包装的控件，表单控件会自动添加 value，数据同步将被 Form 接管
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <Form.Item label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="请选择" style={{width: 100}}>
                                <Option value="0">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder="请选择" style={{width: 100}}>
                                <Option value="0">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="请选择" style={{width: 100}}>
                                <Option value="0">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select placeholder="请选择" style={{width: 100}}>
                                <Option value="0">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" className="f-mr20">查询</Button>
                    <Button>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}

// 经 Form.create() 包装过的组件会自带 this.props.form 属性
const SearchForm = Form.create({})(FilterForm)

// 开通城市弹窗
class CityAlert extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 10
            }
        }
        const { getFieldDecorator } = this.props.form;
        return(
            <Form {...formItemLayout}>
                <Form.Item label="选择城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="请选择要开通的城市">
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="请选择营运模式">
                                <Option value="0">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder="请选择用车模式">
                                <Option value="0">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </Form.Item>
            </Form>
        )
    }
}
const OpenCityAlert = Form.create({})(CityAlert)
