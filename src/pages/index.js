import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Trey Michaels'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Trey Michaels Personal Portfolio'} />
        <meta property="og:site_name" content="Trey Michaels"/>
        <meta property="og:title" content="Trey Michaels"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="../images/trey_profile.jpg"/>
        <meta property="og:description" content={description || 'Trey Michaels Personal Portfolio'}/>
        <meta property="og:url" content="https://treymichaels.com"/>
      </Helmet>
      <App />
    </>
  );
};
