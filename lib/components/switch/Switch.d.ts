import React from 'react';
import { ColorsEnum } from "../../styles";
import { ITheme } from "../../theme";
export declare const StyledSwitch: import("styled-components").StyledComponent<"label", any, {
    color: string;
} & {
    width?: number | undefined;
    theme: ITheme;
}, "color">;
export declare const StyledSwitchSlider: import("styled-components").StyledComponent<"div", any, {
    width?: number | undefined;
}, never>;
export interface ISwitchProps {
    color?: ColorsEnum;
    className?: string;
    width?: number;
    checked?: boolean;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
    defaultChecked?: boolean;
}
export declare const Switch: React.FC<ISwitchProps>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map