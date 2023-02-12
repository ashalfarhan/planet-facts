import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Fragment } from 'preact';


export default function App({ Component }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Antonio:wght@500&amp;display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component />
    </Fragment>
  );
}
