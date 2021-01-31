import React from 'react';
import styled from "styled-components";
import {LinkButton} from "../button/Button";

export const CodeExampleWrapper = styled.pre`
  position: relative;
  
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;

  background-color: #F5F5F5;
  
  color: #4F4F4F;
  font-size: 24px;
`;

const CopyButton = styled(LinkButton)`
  position: absolute;
  top: 20px;
  right: 20px;

  font-size: 16px;
`;

export interface ICodeExampleProps {
  onCopyClick?: () => {};
}

export const CodeExample: React.FC<ICodeExampleProps> = (props) => {
  return (
    <CodeExampleWrapper>
      {props.children}
      <CopyButton onClick={props.onCopyClick}>Copy</CopyButton>
    </CodeExampleWrapper>
  );
};

export default CodeExample;
