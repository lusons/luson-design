import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { ComponentMeta } from '@storybook/react'
import { Button } from './button'

export const ButtonTest = () => {
  return (
    <>
      <Button type={'primary'} size="middle" onClick={action('点我')}>
        点我
      </Button>
      <Button type={'danger'} size="small">
        点我
      </Button>
      <Button type={'default'}>default</Button>
      <Button type={'default'} disabled>
        disabled
      </Button>
      <Button type={'link'} href="https://www.baidu.com">
        link
      </Button>
    </>
  )
}

export default {
  title: 'Luson/Button',
  component: ButtonTest,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    storyRender => <div style={{ textAlign: 'center' }}>{storyRender()}</div>,
    withInfo,
  ],
} as ComponentMeta<typeof ButtonTest>
