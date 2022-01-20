import { ko } from './ko';

interface LangType {
    [key: string]: {
        [key: string]: string;
    };
}

export const languageMap: LangType = {
    default: ko,
    ko,
};
