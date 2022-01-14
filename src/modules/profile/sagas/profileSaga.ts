import { put } from 'redux-saga/effects';
import { profileComplete, profileError } from '..';

export function* profileSaga() {
    try {
        yield put(profileComplete({
            data: 'data'
        }));
    } catch (error: any) {
        yield put(profileError(error));
    }
}
