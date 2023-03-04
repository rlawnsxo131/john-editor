import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

function renderButton(props?: Partial<ComponentProps<typeof Button>>) {
  const childrenText = 'hello';
  const onClick = vi.fn();

  const result = render(
    <Button {...props} onClick={onClick}>
      <div>{childrenText}</div>
    </Button>,
  );

  const ButtonElement = () => result.queryByRole('button');

  const ChildrenDiv = () =>
    result.queryByText('hello', {
      selector: 'div',
    });

  function clickButton() {
    const button = ButtonElement();
    if (!button) throw new Error('ButtonElement is null');
    return userEvent.click(button);
  }

  return {
    result,
    ChildrenDiv,
    onClick,
    clickButton,
  };
}

describe('<Button />', () => {
  it('children 을 잘 렌더링 한다.', () => {
    const { ChildrenDiv } = renderButton();

    expect(ChildrenDiv()).toBeInTheDocument();
  });

  it('클릭하면 onClick 함수가 한번 호출되어야 한다.', async () => {
    const { onClick, clickButton } = renderButton();

    clickButton();

    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1));
  });
});
