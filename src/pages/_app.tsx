import 'styles/base/base.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { DefaultLayout } from 'layouts/default/Default';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          refreshInterval: 20000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </SessionProvider>
  );
};

export default App;
