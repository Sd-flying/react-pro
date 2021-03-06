import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from '../nomatch'

export default class Admin extends Component {
    render() {
        const { routes, location } = this.props;
        return (
            <div className="g-page">
                <SideBar></SideBar>
                <div className="g-wrap">
                    <Header/>
                    <div className="g-container">
                        <Switch>
                            {
                                routes.map((item, i) => {
                                    return <Route path={item.path} key={i} render={ props => (<item.component {...props}  routes={item.children}/>)}/>
                                })
                            }
                            <Redirect to='/admin/home'></Redirect>
                            {/*页面找不到时跳转的页面*/}
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
