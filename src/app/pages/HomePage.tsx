import { ChatterForm } from 'app/components/ChatterCard';
import { FilterBar } from 'app/components/FilterBar';
import { Flex } from 'app/components/Flex';
import { Page } from 'app/components/Page';
import { TitleText } from 'app/components/Typography';
import React from 'react';

export const HomePage: React.FC = () => (
  <Page title="Home">
    <ChatterForm />
    <Title />
    <FilterBar />
  </Page>
);

const Title: React.FC = () => (
  <Flex css={{ paddingTop: '2em', paddingBottom: '1em' }}>
    <TitleText>Chatters</TitleText>
  </Flex>
);
