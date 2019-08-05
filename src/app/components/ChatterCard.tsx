import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-fontawesome';
import { FlexForm, Flex } from 'app/components/Flex';
import { TimestampText, UsernameText } from 'app/components/Typography';
import React from 'react';
import TimeAgo from 'react-timeago';
import { Post } from 'store/chatter.store';
import { User } from 'store/user.store';
import { StyleCtx } from 'styles';
import { Textarea, Button } from './Form';

export const ChatterForm: React.FC<{ user: User }> = ({ user }) => {
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
        <Avatar
          icon={user.icon}
          theme={{ bg: card.bgPlacemat, border: card.border, fg: user.color }}
        />
        <Textarea placeholder="What's on your mind?" theme={card} />
      </Flex>
      <Flex justify="end" row>
        <Button text="Post" type="submit" theme={button} />
      </Flex>
    </FlexForm>
  );
};

export const ChatterCard: React.FC<{
  post: Post;
  user: User;
}> = ({
  post: { username, timestamp, content, count, isLiked, isDisliked },
  user,
}) => {
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
            icon={user.icon}
            theme={{
              bg: card.bgPlacemat,
              border: card.border,
              fg: user.color,
            }}
          />
          <Flex css={{ paddingLeft: '1em' }}>
            <UsernameText>{username}</UsernameText>
            <TimestampText>
              <TimeAgo date={timestamp} /> &bull; Post #{count}
            </TimestampText>
          </Flex>
        </CardHead>
        <CardBody>{content}</CardBody>
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

const CardBody: React.FC = (props) => (
  <div
    css={{
      paddingTop: '1em',
      width: '100%',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    }}
    {...props}
  />
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

const Avatar: React.FC<{
  icon: FontAwesomeProps['icon'];
  theme: { bg: string; border: string; fg: string };
}> = ({ icon, theme }) => (
  <Flex
    align="center"
    justify="center"
    css={{
      backgroundColor: theme.bg,
      border: `1px solid ${theme.border}`,
      borderRadius: '50%',
      color: theme.fg,
      height: '4em',
      width: '4em',
    }}>
    <FontAwesomeIcon icon={icon} css={{ fontSize: '2em' }} />
  </Flex>
);
