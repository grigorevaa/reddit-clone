import { useState } from 'react';
import { CgSandClock } from 'react-icons/cg';
import {
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineSquares2X2,
  HiOutlineWrench,
} from 'react-icons/hi2';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { IoBookOutline, IoMegaphoneOutline } from 'react-icons/io5';
import { LiaMicrophoneAltSolid } from 'react-icons/lia';
import { PiRedditLogo, PiScroll } from 'react-icons/pi';
import { RiCommunityLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from '../styles/SideBar.module.css';
import DropdownButton from './DropdownButton';
import LinkWithIcon from './LinkWithIcon';

const iconProps = {
  size: '2rem',
  color: '#f3f4f7',
};

const ResourcesObjFirst = [
  {
    id: 1,
    name: 'About Reddit',
    icon: <PiRedditLogo {...iconProps} />,
  },
  {
    id: 2,
    name: 'Advertise',
    icon: <IoMegaphoneOutline {...iconProps} />,
  },
  {
    id: 3,
    name: 'Help',
    icon: <IoMdHelpCircleOutline {...iconProps} />,
  },
  {
    id: 4,
    name: 'Blog',
    icon: <IoBookOutline {...iconProps} />,
  },
  {
    id: 5,
    name: 'Careers',
    icon: <HiOutlineWrench {...iconProps} />,
  },
  {
    id: 6,
    name: 'Press',
    icon: <LiaMicrophoneAltSolid {...iconProps} />,
  },
];

const ResourcesObjSecond = [
  {
    id: 1,
    name: 'Communities',
    icon: <RiCommunityLine {...iconProps} />,
  },
  {
    id: 2,
    name: 'Best of Reddit',
    icon: <CgSandClock {...iconProps} />,
  },
  {
    id: 3,
    name: 'Topics',
    icon: <HiOutlineSquares2X2 {...iconProps} />,
  },
];

const ResourcesObjThird = [
  {
    id: 1,
    name: 'Content Policy',
    icon: <PiScroll {...iconProps} />,
  },
  {
    id: 2,
    name: 'Privicy Policy',
    icon: <HiOutlineScale {...iconProps} />,
  },
  {
    id: 3,
    name: 'UserAgreement',
    icon: <HiOutlineDocumentText {...iconProps} />,
  },
];

function SideBar() {
  const [recent, setRecent] = useState(false);
  const [topics, setTopics] = useState(false);
  const [resources, setResources] = useState(true);

  const recentStyle = recent
    ? styles.dropdownRecentOpen
    : styles.dropdownRecentClose;

  const topicsStyle = topics
    ? styles.dropdownTopicsOpen
    : styles.dropdownTopicsClose;

  const resourcesStyle = resources
    ? styles.dropdownResoursesOpen
    : styles.dropdownResoursesClose;

  return (
    <div>
      <nav className={styles.sideBar}>
        <div className={styles.feedLinks}></div>
        <div className={styles.recentReddits}>
          <DropdownButton title="Recent" status={recent} setOpen={setRecent} />
          <div className={recentStyle}>
            {ResourcesObjFirst.map((item) => (
              <LinkWithIcon path="#" name={item.name} key={item.id}>
                {item.icon}
              </LinkWithIcon>
            ))}
          </div>
        </div>
        <hr className={styles.horizontalLine} />
        <div className={styles.topics}>
          <DropdownButton title="Topics" status={topics} setOpen={setTopics} />
          <div className={topicsStyle}>
            {ResourcesObjFirst.map((item) => (
              <LinkWithIcon path="#" name={item.name} key={item.id}>
                {item.icon}
              </LinkWithIcon>
            ))}
          </div>
        </div>
        <hr className={styles.horizontalLine} />
        <div className={styles.resources}>
          <DropdownButton
            title="Resources"
            status={resources}
            setOpen={setResources}
          />
          <div className={resourcesStyle}>
            {ResourcesObjFirst.map((item) => (
              <LinkWithIcon path="#" name={item.name} key={item.id}>
                {item.icon}
              </LinkWithIcon>
            ))}
            <hr className={styles.horizontalLine} />
            {ResourcesObjSecond.map((item) => (
              <LinkWithIcon path="#" name={item.name} key={item.id}>
                {item.icon}
              </LinkWithIcon>
            ))}
            <hr className={styles.horizontalLine} />
            {ResourcesObjThird.map((item) => (
              <LinkWithIcon path="#" name={item.name} key={item.id}>
                {item.icon}
              </LinkWithIcon>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <Link to="#" className={styles.footerLink}>
            Reddit, Inc. 2024. All rights reserved.
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
