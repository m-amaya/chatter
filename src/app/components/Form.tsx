import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { constants } from 'styles/constants';
import { Flex, FlexButton } from './Flex';

const { font } = constants;

export const Textarea: React.FC<
  React.ComponentProps<typeof TextareaAutosize> & {
    theme: { fgPlaceholder: string };
  }
> = ({ theme, ...rest }) => (
  <Flex grow>
    <TextareaAutosize
      rows={4}
      css={{
        'border': 'none',
        'outline': 0,
        'padding': '1em',
        'resize': 'none',
        'width': '100%',
        '&:placeholder': { color: theme.fgPlaceholder },
      }}
      {...rest}
    />
  </Flex>
);

const defaultOnClick: ClickHandler<HTMLButtonElement> = (e) =>
  e.preventDefault();

export const Button: React.FC<
  React.ComponentProps<typeof FlexButton> & {
    text: string;
    onClick?: ClickHandler<HTMLButtonElement>;
    theme: { bg: string; fg: string };
  }
> = ({ text, onClick, theme, ...rest }) => (
  <FlexButton
    onClick={onClick ? onClick : defaultOnClick}
    css={{
      backgroundColor: theme.bg,
      borderRadius: 5,
      color: theme.fg,
      cursor: 'pointer',
      fontWeight: font.weight.text.bold,
      padding: '0.5em 1em',
    }}
    {...rest}>
    {text}
  </FlexButton>
);
