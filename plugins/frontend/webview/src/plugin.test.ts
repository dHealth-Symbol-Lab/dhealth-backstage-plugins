import { webviewPlugin } from './plugin';

describe('webview', () => {
  it('should export plugin', () => {
    expect(webviewPlugin).toBeDefined();
  });
});
