import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputComponent } from './input.component';
export default {
  title: 'Input',
  component: InputComponent,
  decorators: [moduleMetadata({ declarations: [InputComponent] })],
} as Meta;
const Template: Story<InputComponent> = (args) => ({ props: { ...args } });
export const Default = Template.bind({});
Default.args = {};
