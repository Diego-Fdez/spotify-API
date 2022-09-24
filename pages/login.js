import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = ({ providers }) => {
  return (
    <div className='flex flex-col space-y-4 items-center bg-black min-h-screen w-full justify-center'>
      <Image
        width={208}
        height={208}
        src='https://links.papareact.com/9xl'
        alt='logo-spotify'
      />
      {Object.values(providers).map((provider) => (
        <div key={provider?.name}>
          <button
            className='bg-[#18d860] text-white p-5 rounded-full border border-[#18d180] hover:bg-transparent transition-all'
            onClick={() => signIn(provider?.id, { callbackUrl: '/' })}
          >
            Login with {provider?.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
