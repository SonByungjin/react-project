import { combineReducers } from "redux";
import { all, call } from 'redux-saga/effects';

import { ProfileReducer, ProfileState } from "./profile";
import { rootProfileSaga } from "./profile/sagas";

export interface RootState {
    profile: ProfileState,
}

export const rootReducer = combineReducers({
    profile: ProfileReducer,
});

export function* rootSaga() {
    yield all([
        call(rootProfileSaga),
    ]);
};
