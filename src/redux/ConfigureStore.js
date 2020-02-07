import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form'
import {Bio} from './bio';
import {Jobs} from './jobs';
import {Projects} from './projects';
import {Courses} from './courses';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialMessage } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bio: Bio,
            jobs: Jobs,
            projects: Projects,
            courses: Courses,
            ...createForms({
                message: InitialMessage
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}