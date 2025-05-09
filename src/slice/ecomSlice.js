import { createSlice } from "@reduxjs/toolkit";

const ecomSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        loading: true,
        error: null,
    },
    reducers: {
        homeHeroGetRequest(state) {
            return {
                ...state,
                loading: true
            }
        },
        homeHeroGetSuccess(state, action) {
            return {
                ...state,
                loading: false,
                banners: action.payload,
                error: null
            }
        },
        homeHeroGetFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        featuredGetSuccess(state, action) {
            return {
                ...state,
                loading: false,
                category: action.payload,
            }
        },
        featuredGetFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        pgcntntGetRequets(state) {
            return {
                ...state,
                loading: true,
                errorr: null
            }
        },
        pgcntntGetSuccess(state, action) {
            return {
                ...state,
                loading: false,
                pageContent: action.payload,
                error: null
            }
        },
        pgcntntGetFail(state, action) {
            return {
                ...state,
                error: action.payload
            }
        },
        testimonialGetAllRequest(state){
            return {
                ...state,
                loading:true
            }
        },
        testimonialGetAllSuccess(state, action){
            return {
                ...state,
                loading:false,
                testimonial:action.payload,
                error:null
            }
        },
        testimonialGetAllFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        cardGetRequest(state){
            return {
                ...state,
                loading:true
            }
        },
        cardGetSuccess(state, action){
            return {
                ...state,
                loading:false,
                cards:action.payload,
                error:null
            }
        }, 
        cardGetFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        brandGetAllRequest(state){
            return {
                ...state,
                loading:true,
            }
        },
        brandGetAllSuccess(state,action){
            return {
                ...state,
                loading:false,
                brand:action.payload,
                error:null
            }
        },
        brandGetAllFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        getSubCatRequest(state){
            return {
                ...state,
                loading:true,
                error:null
            }
        },
        getSubCatSuccess(state, action){
            return {
                ...state,
                loading:false,
                subcategory:action.payload,
                error:null
            }
        },
        getSubCatFail(state,action){
            return{
                ...state,
                error:action.payload
            }
        },
        productGetRequest(state){
            return {
                ...state,
                loading:true
            }
        },
        productGetSuccess(state, action){
            return {
                ...state,
                loading:false,
                // products:action.payload,
                productss:action.payload,
                error:null
            }
        },
        productGetFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        enquiryPostRequest(state){
            return {
                ...state,
                loading:true
            }
        },
        enquiryPostSuccess(state, action){
            return {
                ...state,
                loading:false,
                enquiry:action.payload,
            }
        },
        enquiryPostFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        getProductByIdRequest(state){
            return {
                ...state,
                loading:true
            }
        },
        getProductByIdSuccess(state, action){
            return {
                ...state,
                loading:false,
                product:action.payload,
            }
        },
        getProductByIdFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        getBstSellerSuccess(state, action){
            return {
                ...state,
                loading:false,
                Bestsellers:action.payload
            }
        },
        getBstSellerFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        getMachinarySuccess(state, action){
            return {
                ...state,
                loading:false,
                Machinary:action.payload
            }
        },
        getMachinaryFail(state, action){
            return {
                ...state,
                error:action.payload
            }
        },
        

    }
})

const { actions, reducer } = ecomSlice;
export const {
    homeHeroGetRequest,
    homeHeroGetSuccess,
    homeHeroGetFail,
    featuredGetSuccess,
    featuredGetFail,
    pgcntntGetRequets,
    pgcntntGetSuccess,
    pgcntntGetFail,
    testimonialGetAllRequest,
    testimonialGetAllSuccess,
    testimonialGetAllFail,
    cardGetRequest,
    cardGetSuccess,
    cardGetFail,
    brandGetAllRequest,
    brandGetAllSuccess,
    brandGetAllFail,
    getSubCatRequest,
    getSubCatSuccess,
    getSubCatFail,
    productGetRequest,
    productGetSuccess,
    productGetFail,
    enquiryPostRequest,
    enquiryPostSuccess,
    enquiryPostFail,
    getProductByIdRequest,
    getProductByIdSuccess,
    getProductByIdFail,
    getBstSellerSuccess,
    getBstSellerFail,
    getMachinarySuccess,
    getMachinaryFail,

} = actions;

export default reducer;