import { brandGetAllFail, brandGetAllRequest, brandGetAllSuccess, cardGetFail, cardGetRequest, cardGetSuccess, featuredGetFail, featuredGetSuccess, getSubCatFail, getSubCatRequest, getSubCatSuccess, homeHeroGetFail, homeHeroGetRequest, homeHeroGetSuccess, pgcntntGetFail, pgcntntGetRequets, pgcntntGetSuccess, productGetFail, productGetRequest, productGetSuccess, testimonialGetAllFail, testimonialGetAllRequest, testimonialGetAllSuccess } from "../slice/ecomSlice";
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


export const getCard = () => {
    return async (dispatch) => {
        try {
            dispatch(cardGetRequest());
            const response = await globalGetService('/cards')
            dispatch(cardGetSuccess(response.data))
        } catch (error) {
            dispatch(cardGetFail(error))
        }
    }
}

export const fetchBrand = (query) => {
    return async (dispatch) => {
        try {
            dispatch(brandGetAllRequest());
            const response = await globalGetService('/brand', query);
            dispatch(brandGetAllSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(brandGetAllFail(error))
        }
    }
}



export const fetchSubCategory = () => {
    return async (dispatch) => {
        try {
            dispatch(getSubCatRequest())
            const response = await globalGetService('/subcategory');
            dispatch(getSubCatSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(getSubCatFail(error))
        }
    }
}


export const fetchProduct = (query) => {
    return async (dispatch) => {
        try {
            dispatch(productGetRequest());
            const response = await globalGetService('/pro', query);
            dispatch(productGetSuccess(response.data));
            return response.data
        } catch (error) {
            dispatch(productGetFail(error))
        }
    }
}