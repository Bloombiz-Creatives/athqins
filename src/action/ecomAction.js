import { featuredGetFail, featuredGetSuccess, homeHeroGetFail, homeHeroGetRequest, homeHeroGetSuccess, pgcntntGetFail, pgcntntGetRequets, pgcntntGetSuccess, testimonialGetAllFail, testimonialGetAllRequest, testimonialGetAllSuccess } from "../slice/ecomSlice";
import {globalGetService} from "../utils/globalApiServices";

export const fetchHomeHero = () => {
    return async (dispatch) => {
        try {
            dispatch(homeHeroGetRequest());
            const response = await globalGetService('/hero');
            dispatch(homeHeroGetSuccess(response.data))
        } catch (error) {
            dispatch(homeHeroGetFail(error));
        }
    }
}


export const fetchCategory = () => {
    return async (dispatch) => {
        try {
            const response = await globalGetService('/category');
            dispatch(featuredGetSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(featuredGetFail(error))
        }
    }
}


export const fetchHomePageContent = () => {
    return async (dispatch) => {
        try {
            dispatch(pgcntntGetRequets());
            const response = await globalGetService('/pagecontent');
            dispatch(pgcntntGetSuccess(response.data))            
        } catch (error) {
            dispatch(pgcntntGetFail(error))
        }
    }
}


export const fetchHomeTestimonial = () => {
    return async (dispatch) => {
        try {
            dispatch(testimonialGetAllRequest());
            const response = await globalGetService('/testimonial');
            dispatch(testimonialGetAllSuccess(response.data))
            return response.data
        } catch (error) {
            dispatch(testimonialGetAllFail(error))
        }
    }
}