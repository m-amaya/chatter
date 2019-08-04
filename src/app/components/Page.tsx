import { Flex } from 'app/components/Flex';
import React from 'react';

export const Page: React.FC = ({ children }) => (
  <Flex basis={500} grow scrollY>
    {children}
  </Flex>
);
