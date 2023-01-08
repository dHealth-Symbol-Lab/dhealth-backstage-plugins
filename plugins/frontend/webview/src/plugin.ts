import { createComponentExtension, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const webviewPlugin = createPlugin({
  id: 'webview',
  routes: {
    root: rootRouteRef,
  },
});

export const WebviewCard = webviewPlugin.provide(
  createComponentExtension({
    name: 'WebviewCard',
    component: {
      lazy: () =>
        import('./components/WebviewCard').then(m => m.WebviewCard),
    },
  }),
);

export const WebviewPage = webviewPlugin.provide(
  createRoutableExtension({
    name: 'WebviewPage',
    component: () =>
      import('./components/WebviewPage').then(m => m.WebviewPage),
    mountPoint: rootRouteRef,
  }),
);