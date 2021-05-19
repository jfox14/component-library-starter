import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'large',
  label: 'Button',
};
