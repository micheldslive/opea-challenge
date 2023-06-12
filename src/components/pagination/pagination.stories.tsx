import type { StoryFn } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination
};

const Template: StoryFn = () => {
  return <Pagination />;
};

export const Default = Template.bind({});

Default.args = {};
