import React from 'react';
import {BorderedButton, BorderedButtonText, PrimaryButton} from "./Button";

export default {
  title: "Components/Button",
  component: BorderedButton,
}

const BorderedButtonStory: any = ({ ...args }) => (
  <BorderedButton {...args}>Click me!</BorderedButton>
);

export const DefaultBorderedButton: any = BorderedButtonStory.bind({});
DefaultBorderedButton.args = {

};

const BorderedButtonTextStory: any = ({ ...args }) => (
  <BorderedButtonText {...args}>Click me!</BorderedButtonText>
);

export const DefaultBorderedButtonText: any = BorderedButtonTextStory.bind({});
BorderedButtonTextStory.args = {

};

const PrimaryButtonStory: any = ({ ...args }) => (
  <PrimaryButton {...args}>Click me!</PrimaryButton>
);

export const DefaultPrimaryButton: any = PrimaryButtonStory.bind({});
DefaultPrimaryButton.args = {
  glow: false,
};

