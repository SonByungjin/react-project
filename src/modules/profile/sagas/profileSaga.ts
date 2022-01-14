import { call, put } from 'redux-saga/effects';
import { profileComplete, profileError, ProfileFetch } from '../actions';
import { API, RequestOptions } from '../../../api';

const profileOption: RequestOptions = {
    apiVersion: 'init'
};

export function* profileSaga(action: ProfileFetch) {
    try {
        yield call(API.post(profileOption), '/profile', action.payload);
        yield put(profileComplete({
            data: 'data'
        }));
    } catch (error: any) {
        yield put(profileError(error));
    }
}
