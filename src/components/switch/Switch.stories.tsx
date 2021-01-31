import React from 'react';
import {Switch} from "./Switch";
import {ColorsEnum} from "../../styles";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    color: {
      control: {
        type: 'inline-radio',
        options: [ColorsEnum.Green, ColorsEnum.Fucsia, ColorsEnum.Blue],
      }
    }
  },
};

const SwitchStory = ({ ...args }) => (
  <Switch {...args} />
);

export const Default: any = SwitchStory.bind({});
Default.args = {
  color: ColorsEnum.Green,
  defaultChecked: true,
};

export const Fucsia: any = SwitchStory.bind({});
Fucsia.args = {
  color: ColorsEnum.Fucsia,
  defaultChecked: true,
};

export const Blue: any = SwitchStory.bind({});
Blue.args = {
  color: ColorsEnum.Blue,
  defaultChecked: true,
};
