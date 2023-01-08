import React from "react";

export const WebView = ({ url }: { url: string }) => (
  <iframe
    id="iFrameExample"
    title="iFrame Example"
    frameBorder="0"
    width="100%"
    height="100%"
    src={url}
  />
);