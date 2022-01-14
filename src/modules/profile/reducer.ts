import { CommonError } from "../type";
import { ProfileAction } from "./actions";
import { PROFILE_COMPLETE, PROFILE_ERROR, PROFILE_FETCH } from "./constants";

export interface ProfileState {
    data: string;
    loading: boolean;
    error?: CommonError; 
}

export const initialProfleState: ProfileState = {
    data: '',
    loading: false
}

export const ProfileReducer = (state = initialProfleState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case PROFILE_FETCH:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case PROFILE_COMPLETE:
            return {
                ...state,
                data: action.payload.data,
                loading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
