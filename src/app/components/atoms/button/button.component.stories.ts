import { moduleMetadata, Story, Meta } from '@storybook/angular';import { ButtonComponent } from './button.component';export default {title: 'Button',component: ButtonComponent,decorators: [moduleMetadata({declarations: [ButtonComponent],}),],} as Meta;const Template: Story<ButtonComponent> = args => ({ props: { ...args }});export const Default = Template.bind({});Default.args = {};