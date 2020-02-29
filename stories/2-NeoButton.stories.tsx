import * as React from 'react';
import { Hello } from '../src/components/Hello';
import { NeomorphButton } from '../src/components/neomorphButton';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import styled from 'styled-components';

addons.setConfig({
  theme: themes.dark
});

export default {
  title: 'Hello',
  component: Hello
};

const BackPlate = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background: ${(props: { color: string }) => props.color};
`;

export const Button100 = () => (
  <BackPlate color="#ddd">
    <NeomorphButton size="100px" color="#ddd"></NeomorphButton>
  </BackPlate>
);
export const ButtonBlue100 = () => (
  <BackPlate color="#ddd">
    <NeomorphButton size="100px" color="#ddd" ringHoverColor="#00d5ffb8"></NeomorphButton>
  </BackPlate>
);
export const ButtonPink = () => (
  <BackPlate color="#eee">
    <NeomorphButton size="100px" color="#eee" ringcolor="deeppink" ringClickColor="#00d5ffb8"></NeomorphButton>
  </BackPlate>
);
