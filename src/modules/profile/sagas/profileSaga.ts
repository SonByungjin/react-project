import { call, put } from 'redux-saga/effects';
import { profileComplete, profileError, ProfileFetch } from '../actions';
import { API, RequestOptions } from '../../../api';

const profileOption: RequestOptions = {
    apiVersion: 'init',
};

interface ProfileResponse {
    success: boolean;
    data: string;
};

export function* profileSaga(action: ProfileFetch) {
    try {
        const rsp: ProfileResponse = yield call(API.post(profileOption), '/profile', action.payload);
        yield put(profileComplete({
            data: rsp.data || 'blank'
        }));
    } catch (error: any) {
        yield put(profileError(error));
    }
}
