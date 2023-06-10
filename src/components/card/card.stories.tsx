import type { StoryFn } from '@storybook/react';
import { CompanyCard } from '.';

export default {
  title: 'Components/CompanyCard',
  component: CompanyCard
};

const Template: StoryFn = () => {
  return (
    <CompanyCard
      handleClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};
