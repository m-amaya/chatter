import { Flex } from 'app/components/Flex';
import { TitleText } from 'app/components/Typography';
import React from 'react';
import { theme } from 'styles/theme';

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

export const PageTitle: React.FC = ({ children }) => (
  <Flex
    css={{
      borderBottom: `1px solid ${theme.page.divider}`,
      paddingTop: '2em',
      paddingBottom: 5,
    }}>
    <TitleText>{children}</TitleText>
  </Flex>
);
