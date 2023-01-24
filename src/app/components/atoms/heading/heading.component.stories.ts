import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeadingComponent } from './heading.component';
export default {
  title: 'Heading',
  component: HeadingComponent,
  decorators: [moduleMetadata({ declarations: [HeadingComponent] })],
} as Meta;
const Template: Story<HeadingComponent> = (args) => ({ props: { ...args } });
export const Default = Template.bind({});
Default.args = {};
