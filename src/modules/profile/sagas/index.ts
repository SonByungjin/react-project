import { takeEvery } from "redux-saga/effects";
import { PROFILE_FETCH } from "../constants";
import { profileSaga } from "./profileSaga";

export function* rootProfileSaga() {
    yield takeEvery(PROFILE_FETCH, profileSaga);
};
