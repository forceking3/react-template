import React,{Component} from 'react';
import '../index.scss';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import {InputGroup,FormControl,Button,Glyphicon} from 'react-bootstrap';
export default class Demo extends Component{
	constructor(props){
		super(props);
		this.getMovieList=this.getMovieList.bind(this);
	}
	getMovieList(){
		this.props.actions.getData();
	}
	render(){
		const path=[{name:'Home',path:'/'},{name:'Demo',path:'/demo',active:true}];
		const data=this.props.module.data.json;
		return (
			<article className="cm-main container">
				<Header path={path}>
					<h2>Title</h2>
				</Header>
				<Loader show={this.props.module.ui.loading}/>
				<section className="cm-content cj-demo container">
					Demo
					<Button onClick={this.getMovieList}>getMovieList</Button>
					{
						data.subjects&&data.subjects.map((v,i)=><div key={v.id}>{v.original_title}</div>)
					}
				</section>
				<Footer activeIndex={1} />
			</article>
		);
	}
}