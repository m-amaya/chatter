import { Flex } from 'app/components/Flex';
import React from 'react';

export const Page: React.FC<{ title: string }> = ({ title, children }) => {
  React.useEffect(() => {
    document.title = `Chatter | ${title}`;
  }, [title]);

  return (
    <Flex basis={500} align="center" grow scrollY>
      <Flex css={{ padding: '1em', width: 500 }}>{children}</Flex>
    </Flex>
  );
};
