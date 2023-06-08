import type { StoryFn } from '@storybook/react';
import { SearchBar } from '.';

export default {
  title: 'Components/SearchBar',
  component: SearchBar
};

const Template: StoryFn = () => {
  return <SearchBar />;
};

export const Default = Template.bind({});

Default.args = {};
