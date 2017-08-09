import {connect} from 'react-redux';
import view from '../components/view';
import * as actions from '../modules/actions';
import {bindActionCreators} from 'redux';
import {module} from '../index';

function mapStateToProps(state){
    return {
	    module:state[module]
    }
}
function mapDispatchToProps(dispatch,props){
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(view);