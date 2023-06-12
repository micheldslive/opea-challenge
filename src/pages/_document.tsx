import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '@/stitches.config';
import i18nextConfig from '../../next-i18next.config';

export default class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet='utf-8' />
          <meta content='Michel Domingos' name='author' />
          <meta property='og:type' content='website' />
          <meta content='summary_large_image' name='twitter:card' />
          <meta name='theme-color' content='#08070b' />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
