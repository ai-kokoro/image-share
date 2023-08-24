'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import SidebarItem, { SidebarItemProps } from './sidebar-item';
import { FaHome, FaDice, FaBookmark, FaPlus, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();

  const items = useMemo(
    (): SidebarItemProps[] => [
      {
        icon: FaHome,
        label: 'Home',
        href: '/',
        pathname
      },
      {
        icon: FaDice,
        label: 'Random',
        href: '/random',
        pathname
      },
      {
        icon: FaBookmark,
        label: 'Bookmarks',
        href: '/bookmarks',
        pathname
      },
      {
        icon: FaPlus,
        label: 'Upload',
        href: '/upload',
        pathname,
        separate: true
      },
      {
        icon: FaUser,
        label: 'Account',
        href: '/account',
        pathname
      }
    ],
    [pathname]
  );

  return (
    <div className='h-full w-[50px] rounded-lg secondary flex flex-col'>
      {items.map(item => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Sidebar;