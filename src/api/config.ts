export interface Config {
    baseUrl: string;
    withCredentials: boolean;
};

export const defaultConfig: Config = {
    baseUrl: '',
    withCredentials: false,
};

declare global {
    interface Window {
        env: Config;
    }
}


export const BaseEnv = {
    config: defaultConfig,
};

window.env = window.env || defaultConfig;
BaseEnv.config = { ...window.env };

export const baseUrl = () => BaseEnv.config.baseUrl || 'http://0.0.0.0:9002/api/init';
export const withCredentials = () => BaseEnv.config.withCredentials;
