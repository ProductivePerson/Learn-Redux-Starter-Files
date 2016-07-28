import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router';

//import the root reducer

import rootReducer from './reducers/index';

//import default data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
//traditional javascript has redundant naming conventions when writing
// objects, so the following code would be
// const defualtState = {posts: posts, comments: comments}
// but es6 will know to do that normally with the following syntax:
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
