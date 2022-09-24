import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  HeartIcon,
  RssIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import { PlayList } from '../';

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className='text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-[#18d860]'>
          <HomeIcon className='w-5 h-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-[#18d860]'>
          <MagnifyingGlassIcon className='w-5 h-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-[#18d860]'>
          <BuildingLibraryIcon className='w-5 h-5' />
          <p>Your Library</p>
        </button>
        <hr className='border-t-[0.1px] border-[#18d860]' />
        <button className='flex items-center space-x-2 hover:text-[#18d860]'>
          <PlusCircleIcon className='w-5 h-5' />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-[#18d860]'>
          <HeartIcon className='w-5 h-5' />
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-[#18d860]'>
          <RssIcon className='w-5 h-5' />
          <p>Your Episodes</p>
        </button>
        <hr className='border-t-[0.1px] border-[#18d860]' />
        {/* playlist */}
        <PlayList />
      </div>
    </div>
  );
};

export default Sidebar;
