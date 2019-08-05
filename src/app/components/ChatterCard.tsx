import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexForm, Flex } from 'app/components/Flex';
import { TimestampText, UsernameText } from 'app/components/Typography';
import React from 'react';
import { StyleCtx } from 'styles';
import { generateChatterText } from 'utils/lorem';
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

export const ChatterCard: React.FC<{
  isLiked?: boolean;
  isDisliked?: boolean;
}> = ({ isLiked, isDisliked }) => {
  const {
    theme: { card },
  } = React.useContext(StyleCtx);
  const likedColor = isLiked ? card.fgLiked : card.border;
  const dislikedColor = isDisliked ? card.fgDisliked : card.border;

  return (
    <Placemat
      theme={{
        bg: card.bgPlacemat,
        border: likedColor,
      }}>
      <Card
        isDisliked={isDisliked}
        theme={{
          bg: isDisliked ? card.bgPlacemat : card.bg,
          border: likedColor,
        }}>
        <CardHead>
          <Avatar
            style={{
              bg: card.bgPlacemat,
              border: card.border,
            }}
          />
          <Flex css={{ paddingLeft: '1em' }}>
            <UsernameText>Marissa Amaya</UsernameText>
            <TimestampText>May 29 &bull; 9:25am</TimestampText>
          </Flex>
        </CardHead>
        <CardBody />
      </Card>
      <ThumbColumn
        isLiked={isLiked}
        isDisliked={isDisliked}
        theme={{
          fgHover: card.fgHover,
          fgLiked: likedColor,
          fgDisliked: dislikedColor,
          bgHover: card.bgHover,
        }}
      />
    </Placemat>
  );
};

const Placemat: React.FC<{ theme: { bg: string; border: string } }> = ({
  theme,
  ...rest
}) => (
  <Flex
    row
    css={{
      backgroundColor: theme.bg,
      border: `1px solid ${theme.border}`,
      borderRadius: 5,
      minHeight: 200,
      marginTop: '1em',
      width: '100%',
    }}
    {...rest}
  />
);

const Card: React.FC<{
  isDisliked?: boolean;
  theme: { bg: string; border: string };
}> = ({ isDisliked, theme, ...rest }) => (
  <Flex
    css={{
      backgroundColor: theme.bg,
      borderRight: `1px solid ${theme.border}`,
      borderRadius: 5,
      opacity: isDisliked ? 0.5 : 1,
      padding: '1em',
      width: 'calc(100% - 50px)',
    }}
    {...rest}
  />
);

const CardHead: React.FC = (props) => <Flex align="center" row {...props} />;

const CardBody: React.FC = () => (
  <div
    css={{
      paddingTop: '1em',
      width: '100%',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    }}>
    {generateChatterText()}
  </div>
);

const ThumbColumn: React.FC<{
  isLiked?: boolean;
  isDisliked?: boolean;
  theme: {
    fgHover: string;
    fgLiked: string;
    fgDisliked: string;
    bgHover: string;
  };
}> = ({ isLiked, isDisliked, theme }) => (
  <Flex align="center" justify="end" css={{ paddingBottom: '1em', width: 50 }}>
    <ThumbIcon
      direction="up"
      isLiked={isLiked}
      theme={{
        fg: theme.fgLiked,
        fgHover: theme.fgHover,
        bgHover: theme.bgHover,
      }}
    />
    <ThumbIcon
      direction="down"
      isDisliked={isDisliked}
      theme={{
        fg: theme.fgDisliked,
        fgHover: theme.fgHover,
        bgHover: theme.bgHover,
      }}
    />
  </Flex>
);

const ThumbIcon: React.FC<{
  direction: 'up' | 'down';
  isLiked?: boolean;
  isDisliked?: boolean;
  theme: { fg: string; fgHover: string; bgHover: string };
}> = ({ direction, isLiked, isDisliked, theme }) => {
  const isSelected =
    (direction === 'up' && isLiked) || (direction === 'down' && isDisliked);

  return (
    <FontAwesomeIcon
      icon={direction === 'up' ? faThumbsUp : faThumbsDown}
      css={{
        'borderRadius': '50%',
        'color': theme.fg,
        'cursor': 'pointer',
        'fontSize': '2em',
        'padding': 6,
        'transition': 'all 200ms',
        '&:hover': {
          backgroundColor: theme.bgHover,
          color: !isSelected ? theme.fgHover : undefined,
        },
      }}
    />
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
