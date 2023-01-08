import React from 'react';
import {
  Header,
  Content,
} from '@backstage/core-components';
import { WebView } from "../WebView";
import './WebViewCard.css';
import { CardContent } from '@material-ui/core';
import { IFrameComponentContentProps } from '../types';

export const WebviewCard = (props: IFrameComponentContentProps) => {
  const { url, title, displayHeader } = props;
  return (
    <Content className='fullscreen-root'>
      { displayHeader === true ? (<Header title={title} ></Header>) : "" }
      <Content className='fullscreen-content'>
        <CardContent className="fullscreen-card">
          <WebView url={ url || "https://example.com/" }/>
        </CardContent>
      </Content>
    </Content>
  );
};
