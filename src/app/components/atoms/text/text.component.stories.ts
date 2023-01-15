import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextComponent } from './text.component';
export default {
  title: 'Text',
  component: TextComponent,
  decorators: [moduleMetadata({ declarations: [TextComponent] })],
} as Meta;
const Template: Story<TextComponent> = (args) => ({ props: { ...args } });
export const Default = Template.bind({});
Default.args = {};
