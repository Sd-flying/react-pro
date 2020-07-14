import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Popover } from 'antd';
import { withRouter } from 'react-router-dom'
import './index.less';

const dateFormat = require('js-dateformat').dateFormat;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            currentTime: ''
        }
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            const time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
            this.setState({
                currentTime: time
            })
        },1000)

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    logOut = ()=> {
        // return <Redirect to={{ pathname: "/login" }} />;
        this.props.history.push('/login')
    }

     content = (
        <div>
            <Button type="link" className="loginOut" onClick={this.logOut}>注销</Button>
            <div>
                <Button type="link" className="loginOut">关于我</Button>
            </div>
        </div>
    );

    render() {
        const { currentTime, userName } = this.state;
        return (
            <header className="header">
                <div className="header-top" style={{textAlign: "right"}}>
                    <span style={{marginRight: 20,color: 'blue',fontFamily: 'STHupo'}}>欢迎:&nbsp;&nbsp;{ this.props.loginName }</span>

                    <Popover content={this.content} placement="topLeft" arrowPointAtCenter>
                        <span style={{color: 'blue',marginRight: 50}}>设置</span>
                    </Popover>

                </div>
                <div className="header-bottom">
                    <span className="name">{ this.props.menuName }</span>
                    <div>
                        <span className="time">{ currentTime }</span>
                        <span>晴天</span>
                    </div>
                </div>
            </header>
        )
    }
}

// 从redux中获取menuName 和loginName 的值
const mapState = state => {
    return {
        menuName: state.menuReducer.menuName,
        loginName: state.loginReducer.loginName
    }
}

export default withRouter(connect(mapState)(Header));
