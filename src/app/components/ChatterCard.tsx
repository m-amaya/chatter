import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexForm, Flex } from 'app/components/Flex';
import React from 'react';
import { StyleCtx } from 'styles';
import { Textarea, Button } from './Form';

export const ChatterForm: React.FC = () => {
  const {
    theme: { button, card },
  } = React.useContext(StyleCtx);

  return (
    <FlexForm
      css={{
        border: `1px solid ${card.border}`,
        borderRadius: 5,
        padding: '1em',
      }}>
      <Flex row>
        <Avatar style={{ bg: card.bgPlacemat, border: card.border }} />
        <Textarea placeholder="What's on your mind?" theme={card} />
      </Flex>
      <Flex justify="end" row>
        <Button text="Post" type="submit" theme={button} />
      </Flex>
    </FlexForm>
  );
};

const Avatar: React.FC<{ style: { bg: string; border: string } }> = ({
  style,
}) => (
  <Flex
    align="center"
    justify="center"
    css={{
      backgroundColor: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: '50%',
      height: '4em',
      width: '4em',
    }}>
    <FontAwesomeIcon icon={faHippo} css={{ fontSize: '2em' }} />
  </Flex>
);
