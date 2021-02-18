import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const CodeBlock= ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={materialDark}
      customStyle={preStyles}
      wrapLines={true}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  )
}


const preStyles = {
  backgroundColor: '#1F2935',
  fontSize: '0.80em'
}

export default CodeBlock