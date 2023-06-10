import type { StoryFn } from '@storybook/react';
import { NewCompany } from '.';

export default {
  title: 'Components/NewCompany',
  component: NewCompany
};

const Template: StoryFn = () => {
  return <NewCompany />;
};

export const Default = Template.bind({});

Default.args = {};
