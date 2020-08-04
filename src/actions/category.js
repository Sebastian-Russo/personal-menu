import { API_BASE_URL } from '../config';


export const ADD_CATEGORY = 'ADD_CATEGORY';
export const addCategory = category => ({
    type: ADD_CATEGORY,
    category
})
