import styled from 'styled-components';

// ROW
export const FlexRowStartCenter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexFowSpaceBetweenCenter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
// END OF ROW

// COL
export const FlexColCenterCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const FlexColStartCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
`;
// END OF COL

// RECTANGLE
export const Rectangle = styled.div<{ width?: number, height?: number }>`
  width: ${props => props.width ?? 0}px;
  height: ${props => props.height ?? 0}px;
`;

// END OF RECTANGLE
