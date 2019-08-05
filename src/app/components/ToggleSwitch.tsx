import React from 'react';
import { StyleCtx } from 'styles';
import { Flex } from './Flex';

type ToggleDirection = 'left' | 'right';

export const ToggleSwitch: React.FC<{
  leftLabelText: string;
  rightLabelText: string;
  direction: ToggleDirection;
}> = ({ leftLabelText, rightLabelText, direction }) => {
  const {
    constants: { font },
    theme: { toggle },
  } = React.useContext(StyleCtx);

  return (
    <Flex row css={{ cursor: 'pointer' }}>
      <Label
        text={leftLabelText}
        isActive={direction === 'left'}
        theme={{ boldWeight: font.weight.text.bold }}
      />
      <Switch direction={direction} theme={toggle} />
      <Label
        text={rightLabelText}
        isActive={direction === 'right'}
        theme={{ boldWeight: font.weight.text.bold }}
      />
    </Flex>
  );
};

const Label: React.FC<{
  text: string;
  isActive: boolean;
  theme: { boldWeight: number };
}> = ({ text, isActive, theme }) => (
  <Flex
    css={{
      fontWeight: isActive ? theme.boldWeight : undefined,
      padding: '0 5px',
    }}>
    {text}
  </Flex>
);

const Switch: React.FC<{
  direction: ToggleDirection;
  theme: { bg: string; bgKnob: string; border: string };
}> = ({ direction, theme }) => (
  <Flex justify="center">
    <Flex
      css={{
        backgroundColor: theme.bgKnob,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: direction === 'left' ? 0 : undefined,
        right: direction === 'right' ? 0 : undefined,
        transform: 'translateY(-50%)',
        transformOrigin: 'center',
        height: 15,
        width: 15,
        zIndex: 1,
      }}
    />
    <Flex
      css={{
        backgroundColor: theme.bg,
        border: `1px solid ${theme.border}`,
        borderRadius: 5,
        height: 10,
        width: 25,
      }}
    />
  </Flex>
);