import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </RecoilRoot>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });
  return children;
}

export default MyApp;
