import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import './index.less'

export default class SimpleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'yellowstar',
        }
    }

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const { userName } = this.state;
        return (
            <header className="simple-header">
                <span>欢迎{ userName }</span>
                <Button className="loginOut" type="primary" onClick={this.showModal}>
                    退出
                </Button>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </header>
        )
    }
}
