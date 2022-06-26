import { ComponentMeta } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Menu } from "./menu";
import { MenuItem } from "./menu-item";
import { action } from '@storybook/addon-actions'


export const MenuTest = () => {
  return (
    <>
      <Menu
        defaultIndex={1}
        onSelect={action('horizontal')}
      >
        <MenuItem index={0} disabled>0</MenuItem>
        <MenuItem index={1}>1</MenuItem>
        <MenuItem index={2}>2</MenuItem>
        <MenuItem index={3}>3</MenuItem>
      </Menu>
      <Menu
        mode='vertical'
        defaultIndex={1}
        onSelect={action('vertical')}
      >
        <MenuItem index={0} disabled>0</MenuItem>
        <MenuItem index={1}>1</MenuItem>
        <MenuItem index={2}>2</MenuItem>
        <MenuItem index={3}>3</MenuItem>
      </Menu>
    </>
  );
};

export default {
  title: "Luson/Menu",
  component: MenuTest,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    // (storyRender) => <div style={{ textAlign: 'center' }}>{storyRender()}</div>,
    withInfo,
  ],
} as ComponentMeta<typeof MenuTest>;
