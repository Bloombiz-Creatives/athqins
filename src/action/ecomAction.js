import { homeHeroGetFail, homeHeroGetRequest, homeHeroGetSuccess } from "../slice/ecomSlice";
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
