import type { StoryFn } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header
};

const Template: StoryFn = () => {
  return <Header />;
};

export const Default = Template.bind({});

Default.args = {};
