import type { AppProps } from 'next/app';
import 'styles/globals.css';
import 'styles/fonts.css';
import 'node_modules/modern-normalize/modern-normalize.css';
import { Layout } from '@components/layout/Layout';
import { createContext } from 'react';

type SiteContextType = {
  activeSection: 'blog' | 'about' | undefined;
  blogCategories: { name: string; count: number }[];
};

export const SiteContext = createContext<SiteContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <SiteContext.Provider
        value={{ activeSection: undefined, blogCategories: [] }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SiteContext.Provider>
    </main>
  );
}
