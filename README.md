react-template
========
[Changelog](CHANGELOG.md)
### stacks
* react
* redux
* react-router
* react-bootstrap
* es6
* webpack2
### features
* flex layout
* basename supported
* page change animation
* loading data animation
* responsive layout(maybe...)
* use fetch-jsonp to cross origin
### details
* install
> 1.npm install  
> 2.npm start  
> 3.ask [http://localhost:612/react-template/](http://localhost:612/react-template/)
* build
> 1.npm run build  
> 2.build files are in the folder /docs
* how to add a page
> 1.copy src/routes/Demo and rename to yours(e.g src/routes/My)  
> 2.modify My/index.js line 5 and line 14 to 'my'  
> 3.modify src/routes/mainRoute import My and add to childRoutes  
> 4.ask http://localhost:612/react-template/my
* how to fetch remote data
> 1.modify src/routes/Demo/modules/actions add a function with params and export it,e.g:
```javascript
function getUsers(userId,callBack){
	const actionName='getUsers';
	return (dispatch,getState)=>{
		dispatch(doAction(t.REQUEST_DATA,actionName));
		const headers={
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			'mode':'cors',
			body:JSON.stringify(userId)
		};
		fetch('https://example.com/',headers)
		.then((res)=>res.json())
		.then((data)=>{
			if(data.code===0)
				dispatch(doAction(t.RECEIVE_DATA,actionName,data));
			else
				dispatch(doAction(t.RECEIVE_ERROR,actionName));
			callBack&&callBack(data);
		});
	}
}
export {getUsers}
```   
> 2.in src/routes/My/componts/view.js add hook 
```javascript
componentWillMount(){
  this.props.actions.getUsers(15,this.formatterData);
}
formatterData(data){
  console.log('data',data);
}
```
> 3.also,you can get data from `this.props.module.data.json`
