import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import tasks data
import commercyTasks from './data/commercyTasks';
import reactTasks from './data/reactTasks';

// create an object for the default data
const defaultState = {
	reactTasks,
	commercyTasks
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
