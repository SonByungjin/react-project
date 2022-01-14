import { CommonError } from '../type';
import {
    PROFILE_FETCH,
    PROFILE_COMPLETE,
    PROFILE_ERROR,
} from './constants';

export interface ProfileFetch {
    type: typeof PROFILE_FETCH,
    payload: {
        id: string;
    }
}

export interface ProfileComplete {
    type: typeof PROFILE_COMPLETE,
    payload: {
        data: string;
    }
}

export interface ProfileError {
    type: typeof PROFILE_ERROR,
    payload: CommonError
}

export type ProfileAction =
    ProfileFetch
    | ProfileComplete
    | ProfileError;

export const profileFetch = (payload: ProfileFetch['payload']): ProfileFetch => ({
    type: PROFILE_FETCH,
    payload
});

export const profileComplete = (payload: ProfileComplete['payload']): ProfileComplete => ({
    type: PROFILE_COMPLETE,
    payload
});

export const profileError = (payload: ProfileError['payload']): ProfileError => ({
    type: PROFILE_ERROR,
    payload
});
