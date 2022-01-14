export interface Config {
    baseUrl: string;
};

export const defaultConfig: Config = {
    baseUrl: ''
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

export const baseUrl = () => BaseEnv.config.baseUrl;
