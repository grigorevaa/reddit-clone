/* eslint-disable react/prop-types */
import LinkWithIcon from './LinkWithIcon';
import LinkWithoutIcon from './LinkWithoutIcon';

function DropdownMenu({ listOfLinks, withIcon }) {
  return (
    <>
      {withIcon
        ? listOfLinks.map((item) => (
            <LinkWithIcon
              path="#"
              title={item.title}
              icon={item.icon}
              key={item.id}
            />
          ))
        : listOfLinks.map((item) => (
            <LinkWithoutIcon path="#" title={item.title} key={item.id} />
          ))}
    </>
  );
}

export default DropdownMenu;
