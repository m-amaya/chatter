import {
  faBell,
  faHashtag,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-fontawesome';
import { Flex } from 'app/components/Flex';
import { Icon } from 'app/components/Icon';
import { LogoText, TabText } from 'app/components/Typography';
import LogoSvg from 'assets/icons/chatter-icon.svg';
import React from 'react';
import { StoreCtx } from 'store';
import { ShowViewFn, View } from 'store/view.store';
import { StyleCtx } from 'styles';

interface Tab {
  text: string;
  view: View;
  icon: FontAwesomeProps['icon'];
}

const TABS: Tab[] = [
  { text: 'Home', view: 'home', icon: faHome },
  { text: 'Browse', view: 'browse', icon: faHashtag },
  { text: 'Alerts', view: 'alerts', icon: faBell },
  { text: 'Profile', view: 'profile', icon: faUser },
];

export const Sidebar: React.FC = () => {
  const {
    theme: { sidebar },
  } = React.useContext(StyleCtx);
  const {
    view: { currentView, showView },
  } = React.useContext(StoreCtx);

  return (
    <Flex
      basis={175}
      css={{
        backgroundColor: sidebar.bg,
        borderRight: `1px solid ${sidebar.border}`,
      }}>
      <Logo borderColor={sidebar.border} showView={showView} />
      {TABS.map((tab) => (
        <Tab
          key={tab.view}
          tab={tab}
          isActive={tab.view === currentView}
          activeColor={sidebar.fgActive}
          showView={showView}
        />
      ))}
    </Flex>
  );
};

const Logo: React.FC<{ borderColor: string; showView: ShowViewFn }> = ({
  borderColor,
  showView,
}) => (
  <Flex
    align="center"
    justify="center"
    css={{
      borderBottom: `1px solid ${borderColor}`,
      cursor: 'pointer',
      height: 175,
    }}
    onClick={() => showView('home')}>
    <Icon src={LogoSvg} size={75} />
    <LogoText css={{ paddingTop: 5 }}>Chatter</LogoText>
  </Flex>
);

const Tab: React.FC<{
  tab: Tab;
  isActive: boolean;
  activeColor: string;
  showView: ShowViewFn;
}> = ({ tab: { icon, text, view }, isActive, activeColor, showView }) => (
  <Flex
    row
    align="center"
    css={{
      color: isActive ? activeColor : undefined,
      cursor: 'pointer',
      height: '4em',
    }}
    onClick={() => showView(view)}>
    <FontAwesomeIcon
      icon={icon}
      css={{ fontSize: '1.25em', margin: '0 0.75em 0 1em' }}
    />
    <TabText>{text}</TabText>
  </Flex>
);
