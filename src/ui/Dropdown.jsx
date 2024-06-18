/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from '../styles/Dropdown.module.css';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

function Dropdown({ title, icon, listOfLinks }) {
  const [status, setStatus] = useState(false);

  const dropdownStatus = status ? styles.dropdownOpen : styles.dropdownClose;

  return (
    <div>
      <DropdownButton
        title={title}
        status={status}
        setStatus={setStatus}
        withIcon={true}
        icon={icon}
      />
      <div className={dropdownStatus}>
        <DropdownMenu listOfLinks={listOfLinks} withIcon={false} />
      </div>
    </div>
  );
}

export default Dropdown;
