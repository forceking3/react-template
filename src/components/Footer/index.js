/**
 * Created by changjin.zhang on 6/30/2017.
 */
import React,{Component} from 'react';
import browserHistory from '../../routes/history';
import {Glyphicon} from 'react-bootstrap';
import './index.scss';
export default class Footer extends Component{
    render(){
        const activeIndex=this.props.activeIndex||0;
        return (
            <footer className="cm-footer">
                <ul className="cm-btm-nav container">
                    <li className={activeIndex===0?'cm-active':null} onClick={()=>browserHistory.push('/')}>
                        <Glyphicon glyph="home" className="cm-btm-icon"/>
                        <div className="cm-nav-text">Home</div>
                    </li>
                    <li className={activeIndex===1?'cm-active':null} onClick={()=>browserHistory.push('/demo')}>
                        <Glyphicon glyph="gift" className="cm-btm-icon"/>
                        <div className="cm-nav-text">Demo</div>
                    </li>
                </ul>
            </footer>
        );
    }
}