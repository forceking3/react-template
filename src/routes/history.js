/**
 * Created by changjin.zhang on 6/30/2017.
 */
// import {useRouterHistory} from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// export const browserHistory=useRouterHistory(createHistory)({basename:"/"});
import { browserHistory } from 'react-router'
import { useBasename } from 'history'

const history = useBasename(() => browserHistory)({ basename: '/' })
export default history;
