import type { StoryFn } from '@storybook/react';
import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input
};

const Template: StoryFn = () => {
  return <Input name={'name'} label={''} placeholder={''} />;
};

export const Default = Template.bind({});

Default.args = {};
