import { ChatterForm } from 'app/components/ChatterCard';
import { Flex } from 'app/components/Flex';
import { Page } from 'app/components/Page';
import { TitleText } from 'app/components/Typography';
import React from 'react';

export const HomePage: React.FC = () => (
  <Page title="Home">
    <ChatterForm />
    <Title />
  </Page>
);

const Title: React.FC = () => (
  <Flex css={{ paddingTop: '2em' }}>
    <TitleText>Chatters</TitleText>
  </Flex>
);
