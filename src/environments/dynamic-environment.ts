declare var window: any;

export class DynamicEnvironment {
    public get environment() {
        return window.config.environment;
    }

    public get backendURL() {
        return window.config.backendURL;
    }
}

export const environment = new DynamicEnvironment();

