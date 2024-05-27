import { localProductsActionTypes } from "./localProductsActionTypes"
import { CategoriesResponse } from "types";

export type CategoryState = {
    categories: CategoriesResponse;
    loading: boolean;
    error: any;
}


const initailState: CategoryState = {
    categories: [],
    loading: false,
    error: null
}
export const localProductsReducer = (state = initailState, action: any) => {
    switch (action.type) {
        case localProductsActionTypes.FETCHING_CATEGORIES_START:
            return {
                ...state,
                loading: true
            }
        case localProductsActionTypes.FETCHING_CATEGORIES_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case localProductsActionTypes.FETCHING_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload as CategoriesResponse,
                loading: false
            }
        default:
            return state;
    }
}