import React, { Component } from 'react';
import { Card, Modal, Button, Input } from 'antd';
import store from '../../redux/store'
import {addToCart, changeLoginName, addInputName, switchMenu} from "../../redux/actions";
import {connect} from "react-redux";

class Richs extends Component {

    constructor(props) {
        super(props);
        this.state={
            inputValues: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValues: e.target.value
        });


    }

    handleBtnClick(){
        alert(this.state.inputValues);

        const { dispatch } = this.props;
        dispatch(addInputName(this.state.inputValues))

        // subscribe监听每次修改情况
        // let unsubscribe = store.subscribe(() =>
        //     store.dispatch(addInputName('张三的张')));
        //
        // unsubscribe();
    }

    componentWillMount() {
        console.log("initial state: ",  store.getState());
    }



    render() {
        return (
            <div class="richPage">
                <Card>
                    <div>
                        <span><h1>从Redux中获取inputValue属性</h1></span>
                        <span><h1>inputValue:</h1><h1>{this.props.inputValue}</h1></span>
                    </div>
                </Card>
                <Card>
                    <Input style={{width: 300}} onChange={this.handleInputChange.bind(this)} placeholder='点击获取inputValue再存入到redux中' />
                    <Button type="primary" onClick={this.handleBtnClick.bind(this)}>click me</Button>
                </Card>
            </div>
        )
    }
}

const mapState = state => {
    console.log('love:',state.inputReducer.inputValue)
    console.log('love:',state.menuReducer.menuName)
    return {
        menuName: state.menuReducer.menuName,
        inputValue: state.inputReducer.inputValue
    }
}

export default connect(mapState)(Richs);
