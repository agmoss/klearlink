import * as React from 'react';
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = Pick<SyntaxHighlighterProps, 'children'>;

const Code: React.FC<CodeProps> = ({ children }) => (
  <SyntaxHighlighter language="python" style={darcula}>
    {children}
  </SyntaxHighlighter>
);

export default Code;
