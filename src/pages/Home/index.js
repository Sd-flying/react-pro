import React, { Component } from 'react'
import './index.less'
import { connect } from 'react-redux'
import ComponentOne from '../../components/componentsOne'

/**
 * 首页
 */



export default class Home extends Component {

    // componentWillMount() {
    //     let App = ({ loginName}) => (
    //         <div>{ loginName }</div>
    //     )
    //
    //     App = connect(state => ({
    //         loginName: state.loginName
    //     }))(App)
    //
    //     // console.log(App)
    // }


    render() {
        return(
            <div className="home">
                <ComponentOne/>
            </div>
        )
    }
}
