import React,{Component} from 'react';
import '../index.scss';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import {InputGroup,FormControl,Button,Glyphicon} from 'react-bootstrap';
import PhotoSwipe from '../../../components/PhotoSwipe';
export default class View extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const path=[{name:'Home',path:'/'},{name:'Image',path:'/image',active:true}];
		const data=this.props.module.data.json;
		return (
			<article className="cm-main container">
				<Header path={path}>
					<h2>Title</h2>
				</Header>
				<section className="cm-content cj-image container">
					<div id="imgCont" className="cj-img-cont">
						<img src={require('../../../assets/img/1 (1).jpg')} />
						<img src={require('../../../assets/img/1 (2).jpg')} />
						<img src={require('../../../assets/img/1 (3).jpg')} />
						<img src={require('../../../assets/img/1 (4).jpg')} />
					</div>
					<div className="cj-img-cont">
						<img src={require('../../../assets/img/1 (5).jpg')} />
						<img src={require('../../../assets/img/1 (6).jpg')} />
					</div>
				</section>
				<PhotoSwipe selector="#imgCont" />
				<Footer activeIndex={1} />
			</article>
		);
	}i
}