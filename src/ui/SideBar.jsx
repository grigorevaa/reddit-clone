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
import Dropdown from './Dropdown';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

const iconProps = {
  size: '2rem',
  color: '#f3f4f7',
};

const ResourcesFirst = [
  {
    id: 1,
    title: 'About Reddit',
    icon: <PiRedditLogo {...iconProps} />,
  },
  {
    id: 2,
    title: 'Advertise',
    icon: <IoMegaphoneOutline {...iconProps} />,
  },
  {
    id: 3,
    title: 'Help',
    icon: <IoMdHelpCircleOutline {...iconProps} />,
  },
  {
    id: 4,
    title: 'Blog',
    icon: <IoBookOutline {...iconProps} />,
  },
  {
    id: 5,
    title: 'Careers',
    icon: <HiOutlineWrench {...iconProps} />,
  },
  {
    id: 6,
    title: 'Press',
    icon: <LiaMicrophoneAltSolid {...iconProps} />,
  },
];

const ResourcesSecond = [
  {
    id: 1,
    title: 'Communities',
    icon: <RiCommunityLine {...iconProps} />,
  },
  {
    id: 2,
    title: 'Best of Reddit',
    icon: <CgSandClock {...iconProps} />,
  },
  {
    id: 3,
    title: 'Topics',
    icon: <HiOutlineSquares2X2 {...iconProps} />,
  },
];

const ResourcesThird = [
  {
    id: 1,
    title: 'Content Policy',
    icon: <PiScroll {...iconProps} />,
  },
  {
    id: 2,
    title: 'Privicy Policy',
    icon: <HiOutlineScale {...iconProps} />,
  },
  {
    id: 3,
    title: 'UserAgreement',
    icon: <HiOutlineDocumentText {...iconProps} />,
  },
];

function SideBar() {
  const [topics, setTopics] = useState(false);
  const [resources, setResources] = useState(true);

  const topicsStyle = topics ? styles.dropdownOpen : styles.dropdownClose;
  const resourcesStyle = resources ? styles.dropdownOpen : styles.dropdownClose;

  return (
    <div>
      <nav className={styles.sideBar}>
        <div className={styles.feedLinks}></div>

        <div className={styles.topics}>
          <DropdownButton
            title="Topics"
            status={topics}
            setStatus={setTopics}
          />
          <div className={topicsStyle}>
            <Dropdown
              title={'Something 1'}
              listOfLinks={ResourcesFirst}
              icon={<PiScroll {...iconProps} />}
            />
            <Dropdown
              title={'Something 2'}
              listOfLinks={ResourcesSecond}
              icon={<PiScroll {...iconProps} />}
            />
            <Dropdown
              title={'Something 3'}
              listOfLinks={ResourcesThird}
              icon={<PiScroll {...iconProps} />}
            />
          </div>
        </div>

        <hr className={styles.horizontalLine} />

        <div className={styles.resources}>
          <DropdownButton
            title="Resources"
            status={resources}
            setStatus={setResources}
          />
          <div className={resourcesStyle}>
            <DropdownMenu listOfLinks={ResourcesFirst} withIcon={true} />
            <hr className={styles.horizontalLine} />
            <DropdownMenu listOfLinks={ResourcesSecond} withIcon={true} />
            <hr className={styles.horizontalLine} />
            <DropdownMenu listOfLinks={ResourcesThird} withIcon={true} />
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
