/**
 * Created by changjin.zhang on 6/29/2017.
 */
import React,{Component} from 'react';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps() {
        const loader=document.querySelector('#layout');
        loader.className = "";
        loader.style.display = "none";
        setTimeout(()=> {
            loader.style.display = "block";
        }, 50);
        setTimeout(()=> {
            loader.className = "new";
        }, 80);
    }
    render(){
        let {children}=this.props;
        return (
            <div id="layout" style={{height:"100%"}}>
                {children}
            </div>
        );
    }
};