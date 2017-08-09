/**
 * Created by changjin.zhang on 7/4/2017.
 */
import React,{Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './index.scss';
export default class Loader extends Component{
    static propTypes={
        show:PropTypes.bool.isRequired
    };
    constructor(props){
        super(props);
        this.state={loadingClass:'cm-loader loader-new'};
    }
    componentWillReceiveProps(nextProps){
        if(!nextProps.show) {
            setTimeout(() => {
                this.setState({"loadingClass":'cm-loader loader-new'});
            }, 1000)
        }else{
            setTimeout(() => {
                this.setState({"loadingClass":'cm-loader loader-new loading'});
            }, 50)
        }
    }
    render(){
        return (
            <div id="loader" className={this.state.loadingClass}>
	            <Glyphicon glyph="refresh" className="cm-loading"/>
            </div>
        );
    }
}
