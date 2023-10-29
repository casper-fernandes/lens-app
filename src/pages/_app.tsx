import type { AppProps } from 'next/app'
import CustomProviders from '../provider';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CustomProviders>
            <Component {...pageProps} />
        </CustomProviders>
    );
}
