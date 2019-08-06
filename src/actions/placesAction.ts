import { IPlace, IPlaceState } from "../reducers/placesReducers";
import { ActionCreator, Dispatch } from "../../node_modules/redux";
import { ThunkAction } from "../../node_modules/redux-thunk";
import axios from "../../node_modules/axios";

export enum PlacesTypeActions{
    GET_ALL= 'GET_ALL'
}

export interface IPlaceGetPlaceAction{
    type: PlacesTypeActions.GET_ALL;
    details: IPlace;
}

export type PlaceAction = IPlaceGetPlaceAction;

export const getDetailPlace: ActionCreator<
    ThunkAction<Promise<any>, IPlaceState, null, IPlaceGetPlaceAction>
    > = () => {
        return async (dispatch: Dispatch) => {
            try{
                const response = await axios.get("https://backendtpaweb.herokuapp.com/api/rooms/Brazil");
                dispatch({
                    details: response.data.results, 
                    type: PlacesTypeActions.GET_ALL
                });
            } catch(err){
                console.log(err);
            }
        };
    };