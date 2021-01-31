import React from 'react';
import {Pill, Pills} from "./Pills";

export default {
  title: 'Components/Pills',
  component: Pills,
}

export const Default = () => {
  return <Pills>
    <Pill>JavaScript</Pill>
    <Pill>TypeScript</Pill>
  </Pills>
}
