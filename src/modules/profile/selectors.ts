import { RootState } from "..";
import { CommonError } from "../type";

export const selectProfileData = (state: RootState): string =>
    state.profile.data;

export const selectProfileLoading = (state: RootState): boolean =>
    state.profile.loading;

export const seectProfileError = (state: RootState): CommonError | undefined =>
    state.profile.error;
