import { Link } from '@/i18n/routing';
import React from 'react';

const NotFound = () => {
  const styles = {
    oopss: {
      position: 'fixed',
      left: '0px',
      top: '0',
      width: '100%',
      height: '100%',
      lineHeight: '1.5em',
      zIndex: 9999,
    },
    errorText: {
      fontSize: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Shabnam', Tahoma, sans-serif",
      color: '#000',
      direction: 'rtl',
    },
    img: {
      margin: '85px auto 20px',
      height: '342px',
    },
    span: {
      position: 'relative',
      fontSize: '3.3em',
      fontWeight: 900,
      marginBottom: '50px',
    },
    pA: {
      fontSize: '19px',
      margin: '30px 0 15px 0',
    },
    pB: {
      fontSize: '15px',
    },
    back: {
      background: '#fff',
      color: '#000',
      fontSize: '30px',
      textDecoration: 'none',
      margin: '2em auto 0',
      padding: '.7em 2em',
      borderRadius: '500px',
      boxShadow: '0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 7px 33px 0 0px #DE5515',
      fontWeight: 900,
      transition: 'all 300ms ease',
    },
  };

  return (
    <div id='oopss' style={styles.oopss as any}>
      <div id='error-text' style={styles.errorText as any}>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" style={styles.img} />
        <span style={styles.span as any}>404 PAGE</span>
        <p style={styles.pA}>
          . The page you were looking for could not be found
        </p>
        <p style={styles.pB}>
          ... Back to previous page
        </p>
        <Link href='/' style={styles.back}>... Back to previous page</Link>
      </div>
    </div>
  );
};

export default NotFound;