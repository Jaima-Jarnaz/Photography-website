import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContainerComponent } from './container.component';
export default {
  title: 'Container',
  component: ContainerComponent,
  decorators: [moduleMetadata({ declarations: [ContainerComponent] })],
} as Meta;
const Template: Story<ContainerComponent> = (args) => ({ props: { ...args } });
export const Default = Template.bind({});
Default.args = {};