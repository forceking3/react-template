/**
 * Created by changjin.zhang on 4/17/2017.
 */
import React,{Component} from 'react';
import {ButtonGroup,Modal,Button,Glyphicon} from 'react-bootstrap';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import browserHistory from '../../history';

class Home extends Component{
	constructor(props){
		super(props);
		this.showDialog=this.showDialog.bind(this);
		this.closeDialog=this.closeDialog.bind(this);
		this.confirmChoice=this.confirmChoice.bind(this);
	}
	confirmChoice(){
		alert('confirmed');
	}
	showDialog(){
		this.props.actions.toggleDialog(true,'test dialog');
	}
	closeDialog(){
		this.props.actions.toggleDialog(false,'test dialog');
	}

	render(){
		return (
			<article className="cm-main container cj-home">
				<Header>
					<h2>Title</h2>
				</Header>

				<Modal
					backdrop='static'
					className="cm-dialog"
					show={this.props.module.data.showDialog}
					onHide={this.closeDialog}
				>
					<Modal.Body>
						<h4>hello world</h4>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.confirmChoice}>
							confirm
						</Button>
						<Button onClick={this.closeDialog}>
							close
						</Button>
					</Modal.Footer>
				</Modal>
				<section className="cm-content">
					hello world
					<ButtonGroup>
						<Button onClick={()=>browserHistory.push('/demo')}>
							Demo
						</Button>
						<Button onClick={this.showDialog}>
							Dialog
						</Button>
						<Button onClick={()=>browserHistory.push('/image')}>
							Image
						</Button>
					</ButtonGroup>
					<img src="static/test.jpg" width="100%" height="150px" />
				</section>
				<Footer/>
			</article>
		);
	}
}
export default Home;