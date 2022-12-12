const _serverUrl: string = process.env.REACT_APP_SERVER_URL || 'http://localhost:1337';

export function getServerUrl(): string {
    return _serverUrl;
}