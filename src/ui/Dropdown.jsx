/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../styles/Dropdown.module.css';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

function Dropdown({ title, links, type, icon, children }) {
  const [status, setStatus] = useState(false);

  const dropdownStatus = status ? styles.dropdownOpen : styles.dropdownClose;

  switch (type) {
    case 'withoutInner':
      return (
        <div>
          <DropdownButton title={title} status={status} setStatus={setStatus} />
          <div className={dropdownStatus}>
            <DropdownMenu links={links} />
          </div>
        </div>
      );
    case 'outer':
      return (
        <div>
          <DropdownButton title={title} status={status} setStatus={setStatus} />
          <div className={dropdownStatus}>{children}</div>
        </div>
      );
    case 'inner':
      return (
        <div>
          <DropdownButton
            title={title}
            status={status}
            setStatus={setStatus}
            icon={icon}
          />
          <div className={dropdownStatus}>
            <DropdownMenu links={links} />
          </div>
        </div>
      );
  }
}

export default Dropdown;
