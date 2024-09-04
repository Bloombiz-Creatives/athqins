import { createSlice } from "@reduxjs/toolkit";

const ecomSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        loading: true,
        error: null,
    },
    reducers: {
        homeHeroGetRequest(state, action) {
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
        pgcntntGetRequets(state, action) {
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
} = actions;

export default reducer;