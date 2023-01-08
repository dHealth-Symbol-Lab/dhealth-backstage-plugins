import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { webviewPlugin, WebviewPage } from '../src/plugin';

createDevApp()
  .registerPlugin(webviewPlugin)
  .addPage({
    element: <WebviewPage />,
    title: 'Root Page',
    path: '/webview'
  })
  .render();
