import { Flex } from 'app/components/Flex';
import { Page } from 'app/components/Page';
import { Sidebar } from 'app/components/Sidebar';
import { SidePanel } from 'app/components/SidePanel';
import React from 'react';
import { hot } from 'react-hot-loader/root';

// const tweet = useObservable(() => chatter);

export const App: React.FC = hot(() => (
  <Flex row css={{ height: '100vh' }}>
    <Sidebar />
    <Page />
    <SidePanel />
  </Flex>
));
