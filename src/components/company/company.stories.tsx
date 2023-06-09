import type { StoryFn } from '@storybook/react';
import { Company } from '.';

export default {
  title: 'Components/Company',
  component: Company
};

const Template: StoryFn = () => {
  return <Company company={{ cnpj: '', email: '', name: '', id: '' }} />;
};

export const Default = Template.bind({});

Default.args = {};
