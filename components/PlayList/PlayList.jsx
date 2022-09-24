import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { playlistIdState } from '../../atoms/playlistAtom';
import useSpotify from '../../hooks/useSpotify';
import { useRecoilState } from 'recoil';

const PlayList = () => {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [playlists, setPlaylist] = useState([]);
  const [playListId, setPlayListId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylist(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <>
      {playlists.map((playlist) => (
        <p
          key={playlist?.id}
          onClick={() => setPlayListId(playlist?.id)}
          className='text-gray-500 hover:text-[#18d180] cursor-pointer'
        >
          {playlist?.name?.slice(0, 25)}
        </p>
      ))}
    </>
  );
};

export default PlayList;
