import { PlacesTypeActions } from "../actions/placesAction";
import { Reducer } from "../../node_modules/@types/react";

export interface IPlace{
    details:Object
}

export interface IPlaceState {
    readonly details: IPlace[];
}

const initialPlaceState: IPlaceState = {
    details: []
}

export const placesReducers: Reducer<any, any> = (
    state = initialPlaceState,
    action:any
) => {
    switch(action.type) {
        case PlacesTypeActions.GET_ALL: {
            console.log(action.details)
            return{
                ...state,
                details: action.details,
            }
        }
        default:
            return state;
    }  
};