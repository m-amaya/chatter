import { ChatterCard, ChatterForm } from 'app/components/ChatterCard';
import { FilterBar } from 'app/components/FilterBar';
import { Flex } from 'app/components/Flex';
import { Page } from 'app/components/Page';
import { TitleText } from 'app/components/Typography';
import React, { useContext } from 'react';
import { useObservable } from 'rxjs-hooks';
import { StoreCtx } from 'store';

export const HomePage: React.FC = () => {
  const {
    chatter: { posts$ },
    user,
  } = useContext(StoreCtx);
  const posts = useObservable(() => posts$, []);

  return (
    <Page title="Home">
      <ChatterForm user={user.session} />
      <Title />
      <FilterBar />
      {posts.map((post, idx) => (
        <ChatterCard
          key={idx}
          post={post}
          user={user.byUsername[post.username]}
        />
      ))}
    </Page>
  );
};

const Title: React.FC = () => (
  <Flex css={{ paddingTop: '2em', paddingBottom: '1em' }}>
    <TitleText>Chatters</TitleText>
  </Flex>
);
