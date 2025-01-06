import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ children }) => (
  <SyntaxHighlighter language="python" style={darcula}>
    {children}
  </SyntaxHighlighter>
);

export default Code;
