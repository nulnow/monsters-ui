import React from 'react';
import styled, {css} from 'styled-components';
import {blueGlowCss, ColorsEnum, fucsiaGlowCss, fucsiaGradientCss, greenGlowCss, greenGradientCss} from "../../styles";
import {ITheme, lightTheme} from "../../theme";

const defaultWidth = 40;
const heightRelation = 0.5;
const paddingRelation = 0.1;
const diameterRelation = 0.325;
const borderRadiusRelation = 0.25;

export const StyledSwitch = styled.label.attrs((props) => ({
  color: props.color ?? ColorsEnum.Green,
}))<{ width?: number, theme: ITheme }>`
  position: relative;

  display: inline-block;

  width: ${(props) => props.width ?? defaultWidth}px;
  height: ${(props) => (props.width ?? defaultWidth) * heightRelation}px;

  transition: background-color 0.2s ease-in-out;

  input:checked + * {
    ${(props) => (({
      [ColorsEnum.Green]: css`
        ${greenGradientCss};
        ${greenGlowCss};
      `,
      [ColorsEnum.Fucsia]: css`
        ${fucsiaGradientCss};
        ${fucsiaGlowCss};
      `,
      [ColorsEnum.Blue]: css`
        background-color: ${props?.theme?.actionColor ?? lightTheme.actionColor};
        ${blueGlowCss};
      `,
    })[props.color as ColorsEnum])};
  }
  
  input:checked + *:before {
    transform: translateX(${(props) => (props.width ?? defaultWidth)
  - ((props.width ?? defaultWidth) * diameterRelation)
  - ((props.width ?? defaultWidth) * paddingRelation * 2)}px);
  }
`;

export const StyledSwitchSlider = styled.div<{ width?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: ${(props) => (props.width ?? defaultWidth) * borderRadiusRelation}px;

  background-color: #b1b5c6;
  transition: background-color 0.3s;

  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    bottom: ${(props) => (props.width ?? defaultWidth) * paddingRelation}px;
    left: ${(props) => (props.width ?? defaultWidth) * paddingRelation}px;

    height: ${(props) => (props.width ?? defaultWidth) * diameterRelation}px;
    width: ${(props) => (props.width ?? defaultWidth) * diameterRelation}px;
    border-radius: 50%;

    background-color: #ffffff;

    transition: transform 0.3s;
  }
`;

export interface ISwitchProps {
  color?: ColorsEnum,
  className?: string;
  width?: number;
  checked?: boolean;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
  defaultChecked?: boolean;
}

export const Switch: React.FC<ISwitchProps> = ({
                                                 className,
                                                 width,
                                                 checked,
                                                 onChange,
                                                 defaultChecked,
                                                 color,
                                               }) => (
  <StyledSwitch className={className} width={width} color={color}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      defaultChecked={defaultChecked}
      hidden
    />
    <StyledSwitchSlider width={width} />
  </StyledSwitch>
);

export default Switch;
