import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { playlistIdState, playlistState } from '../../atoms/playlistAtom';
import { useRecoilValue, useRecoilState } from 'recoil';
import useSpotify from '../../hooks/useSpotify';
import { Songs } from '../';

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
];

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playListId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playListId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playListId)
      .then((data) => setPlaylist(data.body))
      .catch((error) => console.log(error));
  }, [spotifyApi, playListId, setPlaylist]);

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
      <header className='absolute top-5 right-8'>
        <div
          className='flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white'
          onClick={signOut}
        >
          <Image
            src={session?.user?.image ? session?.user?.image : '/no-pic.webp'}
            alt={`profile-image-${session?.user?.name}`}
            width={40}
            height={40}
            className='rounded-full'
          />
          <h2 className='text-[#18d180]'>{session?.user?.name}</h2>
          <ChevronDownIcon className='h-5 w-5 text-[#18d180]' />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 p-8`}
      >
        <Image
          src={playlist?.images[0]?.url}
          width={176}
          height={176}
          alt={playlist?.name}
          className='shadow-2xl'
        />
        <div>
          <p className='text-white'>PLAYLIST</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold text-white'>
            {playlist?.name}
          </h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
