/**
 * Created by changjin.zhang on 6/30/2017.
 */
// import {useRouterHistory} from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// export const browserHistory=useRouterHistory(createHistory)({basename:"/"});
import { browserHistory } from 'react-router'
import { useBasename } from 'history'
import config from '../../config/config'

const history = useBasename(() => browserHistory)({ basename:config.baseName })
export default history;
