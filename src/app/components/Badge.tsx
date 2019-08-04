import React from 'react';
import { StyleCtx } from 'styles';

export const Badge: React.FC = () => {
  const {
    constants: { font },
    theme: { badge },
  } = React.useContext(StyleCtx);

  return (
    <span
      css={{
        backgroundColor: badge.bg,
        borderRadius: 10,
        color: badge.fg,
        fontSize: '0.8em',
        fontWeight: font.weight.text.bold,
        padding: '0 5px',
      }}>
      8
    </span>
  );
};
