import { Flex } from 'app/components/Flex';
import React from 'react';
import { StyleCtx } from 'styles';

export const SidePanel: React.FC = () => {
  const {
    theme: { sidepanel },
  } = React.useContext(StyleCtx);

  return (
    <Flex
      grow
      css={{
        backgroundColor: sidepanel.bg,
        borderLeft: `1px solid ${sidepanel.border}`,
      }}
    />
  );
};
