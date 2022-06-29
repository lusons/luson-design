import { screen } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import { Button } from './button'

describe('button', () => {
  test('btn-primary', () => {
    render(
      <Button type={'primary'} size="large">
        点我
      </Button>,
    )

    const element = screen.queryByText('点我')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary')
  })

  test('link-btn', () => {
    render(
      <Button type={'link'} size="large" href="https://www.baidu.com">
        点我
      </Button>,
    )

    const element = screen.getByText('点我')
    expect(element?.tagName.toLowerCase()).toBe('a')
  })

  test('on-click', () => {
    const defaultProps = {
      onClick: jest.fn(),
    }

    render(
      <Button type={'danger'} size="large" {...defaultProps}>
        点我
      </Button>,
    )
    const element = screen.getByText('点我')
    fireEvent.click(element)
    expect(defaultProps.onClick).toBeCalled()
  })

  test('disabled', () => {
    const defaultProps = {
      onClick: jest.fn(),
      disabled: true,
    }

    render(
      <Button type={'danger'} size="large" {...defaultProps}>
        点我
      </Button>,
    )
    const element = screen.getByText('点我') as HTMLButtonElement
    fireEvent.click(element)
    expect(defaultProps.onClick).not.toBeCalled()
    expect(element.disabled).toBeTruthy()
  })
})
