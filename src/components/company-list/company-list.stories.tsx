import type { StoryFn } from '@storybook/react';
import { CompanyList } from '.';

export default {
  title: 'Components/Company',
  component: CompanyList
};

const Template: StoryFn = () => {
  return <CompanyList />;
};

export const Default = Template.bind({});

Default.args = {};
