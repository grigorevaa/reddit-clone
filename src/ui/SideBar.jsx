import { Link } from 'react-router-dom';
import { resources, topics } from '../data/dummyData.jsx';
import styles from '../styles/SideBar.module.css';
import Dropdown from './Dropdown';

function SideBar() {
  return (
    <div>
      <nav className={styles.sideBar}>
        <div className={styles.feedLinks}></div>

        <Dropdown title={'Topics'} type="outer">
          {topics.map((item) => (
            <Dropdown
              title={item.title}
              links={item.links}
              type="inner"
              icon={item.icon}
              key={item.id}
            />
          ))}
        </Dropdown>

        <hr className={styles.horizontalLine} />
        <Dropdown title={'Resources'} links={resources} type="withoutInner" />
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
