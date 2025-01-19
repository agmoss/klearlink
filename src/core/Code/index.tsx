import React from 'react';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import {
  PrismLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = Pick<SyntaxHighlighterProps, 'children'>;

SyntaxHighlighter.registerLanguage('python', python);

const Code: React.FC<CodeProps> = ({ children }) => (
  <SyntaxHighlighter
    language="python"
    style={darcula}
    showInlineLineNumbers={true}
    showLineNumbers={true}
  >
    {children}
  </SyntaxHighlighter>
);

export default Code;
