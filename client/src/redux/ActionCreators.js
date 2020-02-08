import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl'

export const fetchBio = () => (dispatch) => {
    dispatch(bioLoading(true));
    return fetch(baseUrl+'/get/bio')
        .then(response =>{
                if(response){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(response => dispatch(addBio(response.data[0])))
        .catch(error=> dispatch(bioFailed(error.message)));
}

export const bioLoading = () => ({
    type: ActionTypes.BIO_LOADING
});

export const bioFailed = (errmess) => ({
    type: ActionTypes.BIO_FAILED,
    payload: errmess
})

export const addBio = (bio) => ({
    type: ActionTypes.ADD_BIO,
    payload: bio
})
export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
    return fetch(baseUrl + '/get/projects')
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(response => dispatch(addProjects(response.data)))
        .catch(error=> dispatch(projectsFailed(error.message)));
}

export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
})

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
})

export const fetchJobs = () => (dispatch) => {
    dispatch(jobsLoading(true));
    return fetch(baseUrl + '/get/jobs')
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(response => dispatch(addJobs(response.data)))
        .catch(error=> dispatch(jobsFailed(error.message)));
}

export const jobsLoading = () => ({
    type: ActionTypes.JOBS_LOADING
});

export const jobsFailed = (errmess) => ({
    type: ActionTypes.JOBS_FAILED,
    payload: errmess
})

export const addJobs = (jobs) => ({
    type: ActionTypes.ADD_JOBS,
    payload: jobs
})
export const fetchCourses = () => (dispatch) => {
    dispatch(coursesLoading(true));
    return fetch(baseUrl + '/get/courses')
        .then(response =>{
                if(response.ok){
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then((response)=> dispatch(addCourses(response.data)))
        .catch(error=> dispatch(coursesFailed(error.message)));
}

export const coursesLoading = () => ({
    type: ActionTypes.COURSES_LOADING
});

export const coursesFailed = (errmess) => ({
    type: ActionTypes.COURSES_FAILED,
    payload: errmess
})

export const addCourses = (courses) => ({
    type: ActionTypes.ADD_COURSES,
    payload: courses
})


export const addMessage = (message) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
})

export const postMessage= (firstname, lastname, telnum, email, agree, contactType, messageText) => (dispatch) => {
    const newMessage = {
        firstname:firstname,
        lastname: lastname,
        telnum: telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        messageText: messageText
    }
    newMessage.date = new Date().toISOString();

    return fetch(baseUrl + '/create/newmessage', {
        method: 'POST',
        body: JSON.stringify(newMessage),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response =>{
                if(response.ok){
                    console.log(`la respuesta es ${response}`)
                    return response
                }else{
                    var error = new Error('Error '+response.status + ': '+ response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error
            })
        .then(response => response.json())
        .then(response =>dispatch(addMessage(response)))
        .catch(error => {
            console.log('Post message:'+ error.message)
            alert('your message could not be posted\nError:' + error.message)
        })

}