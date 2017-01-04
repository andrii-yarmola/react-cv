import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reactTasks from './reactTasks';
import commercyTasks from './commercyTasks';

const rootReducer = combineReducers({reactTasks, commercyTasks, routing: routerReducer });

export default rootReducer;
