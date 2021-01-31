import React from 'react';
import { H1, Subheading } from './index';
import {withGlobalStyles} from "../stories.helpers";

export default {
  title: 'Components/Typography',
  component: null,
}

export const Default = () => withGlobalStyles(
  <>
    <H1>Monsters UI 😎</H1>
    <Subheading>Just a simple Reat UI lib built with styled-components</Subheading>
  </>
);
