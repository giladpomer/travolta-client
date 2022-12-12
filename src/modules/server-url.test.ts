import { getServerUrl } from './server-url';

test('server url is not empty', () => {
    const serverUrl = getServerUrl();
    expect(serverUrl).not.toBe('');
});