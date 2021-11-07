import React from 'react';
import { Features } from './Features';

export default {
  title: 'Home > Landing > Features',
  component: Features,
  argTypes: {},
};

const Component = (args) => <Features {...args} />;

export const FeaturesComponent = Component.bind();
