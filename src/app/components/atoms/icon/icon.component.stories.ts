import { moduleMetadata, Story, Meta } from '@storybook/angular';import { IconComponent } from './icon.component';export default {title: 'Icon',component: IconComponent,decorators: [moduleMetadata({declarations: [IconComponent],}),],} as Meta;const Template: Story<IconComponent> = args => ({ props: { ...args }});export const Default = Template.bind({});Default.args = {};