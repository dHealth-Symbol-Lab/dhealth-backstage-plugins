import React from 'react';
import {
  Header,
  Content,
  Page,
} from '@backstage/core-components';
import { WebView } from "../WebView";
import './WebViewPage.css';
import { CardContent } from '@material-ui/core';
import { IFrameComponentContentProps } from '../types';

export const WebviewPage = (props: IFrameComponentContentProps) => {
  const { url, title, displayHeader } = props;
  return (
    <Page themeId='root'>
      { displayHeader === true ? (<Header title={title} ></Header>) : "" }
      <Content className='fullscreen-content'>
        <CardContent className="fullscreen-card">
          <WebView url={ url || "https://example.com/" }/>
        </CardContent>
      </Content>
    </Page>
  );
};
