import { ChatterForm } from 'app/components/ChatterCard';
import { Page } from 'app/components/Page';
import React from 'react';

export const HomePage: React.FC = () => (
  <Page title="Home">
    <ChatterForm />
  </Page>
);
