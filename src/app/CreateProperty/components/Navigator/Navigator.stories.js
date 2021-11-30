import React from 'react';
import { Navigator } from './Navigator';

const Template = (args) => <Navigator {...args} />;

export default {
  title: 'Create Property > Navigator',
  component: Navigator,
  argTypes: {},
};

export const NavigatorComponent = Template.bind();
NavigatorComponent.args = {
  nextButtonText: 'Próximo',
};
