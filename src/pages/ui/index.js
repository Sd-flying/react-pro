import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NoMatch from '../nomatch';
import './index.less'

export default class Ui extends Component {
    
    render() {
        const { routes, location } = this.props;
        return (
            <div className="ui">
                <Switch>
                    {
                        location.pathname === '/admin/ui' 
                        ? <Redirect to='/admin/ui/buttons'></Redirect>
                        : routes.map((item, i) => {
                            return <Route exact path={item.path} component= {item.component} key={i}/>
                        })
                    }
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}