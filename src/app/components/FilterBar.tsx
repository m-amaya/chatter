import { Badge } from 'app/components/Badge';
import { Flex } from 'app/components/Flex';
import { ToggleSwitch } from 'app/components/ToggleSwitch';
import { Link } from 'app/components/Typography';
import React from 'react';
import { StyleCtx } from 'styles';

export const FilterBar: React.FC = () => {
  const {
    theme: { page },
  } = React.useContext(StyleCtx);

  return (
    <Flex
      align="end"
      justify="space-between"
      row
      css={{ borderBottom: `1px solid ${page.divider}`, paddingBottom: 5 }}>
      <Flex row align="center" justify="center">
        <ToggleSwitch
          leftLabelText="All"
          rightLabelText="Liked"
          direction="left"
        />
        <Badge>20</Badge>
      </Flex>
      <Link>Clear</Link>
    </Flex>
  );
};
