/**
 * Created by changjin.zhang on 6/30/2017.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import browserHistory from '../../routes/history';
import {Glyphicon,Breadcrumb} from 'react-bootstrap';
import './index.scss';
export default class Header extends Component{
	static propTypes={
		path:PropTypes.array
	};
	static defaultProps={
		path:[{name:'Home',path:'/',active:true}]
	};

    render(){
        const path=this.props.path;
        return (
            <header className="cm-header">
                <Breadcrumb className="cm-bread-crumb">
                    <Breadcrumb.Item onClick={()=>browserHistory.goBack()}>
                        <Glyphicon className="cm-back" glyph="menu-left" />Back
                    </Breadcrumb.Item>
                    {
                        path.map((item,index)=>{
                            return (
                                <Breadcrumb.Item key={index} onClick={()=>item.path?browserHistory.push(item.path):null} active={item.active||false}>
                                    {item.name}
                                </Breadcrumb.Item>
                            )
                        })
                    }
                </Breadcrumb>
            </header>
        );
    }
}