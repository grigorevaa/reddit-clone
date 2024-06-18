/* eslint-disable react/prop-types */
import DropdownItem from './DropdownItem';

function DropdownMenu({ links }) {
  return (
    <>
      {links.map((item) => (
        <DropdownItem
          path="#"
          title={item.title}
          icon={item.icon}
          key={item.id}
        />
      ))}
    </>
  );
}

export default DropdownMenu;
