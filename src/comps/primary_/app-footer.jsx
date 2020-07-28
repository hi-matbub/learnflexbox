import React from 'react';
import {Link} from 'react-router-dom';

const Path = (props) => {
  return (
    <Link
      to={props.path}
      style={{
        // prettier-ignore
        fontFamily: '\'Rubik\', sans-serif',
        lineHeight: '28px',
        letterSpacing: '1px',
      }}>
      {' '}
      {props.name}
    </Link>
  );
};

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer style={{padding: '40px 0', marginTop: '40px'}}>
      <section
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          marginBottom: '60px',
          paddingTop: '20px',
          borderTop: '1px solid #000',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '20%',
          }}>
          <h2 style={{marginBottom: '20px'}}>{'Flexbox'}</h2>
          <Path path={'/about'} name={'About'} color={'#FFF'} />
          <Path path={'/assessments'} name={'Assessments'} />
          <Path path={'/'} name={'Generator'} />
          <Path path={'/challenges'} name={'UI Challenges'} />
        </div>

        <div style={{display: 'flex', alignItems: 'flex-end', width: '40%'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
            <h2 style={{marginBottom: '20px'}}>{'Get In Touch'}</h2>
            <Path path={'/subscribe'} name={'Subscribe'} />
            <Path path={'/login'} name={'Log in / Sign up'} />
            <Path path={'/support'} name={'Support'} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
            <Path
              path={
                'https://github.com/hi-matbub/flexbox/blob/master/CONTRIBUTING.md'
              }
              name={'Contributing'}
            />
            <Path
              path={'https://github.com/hi-matbub/flexbox/blob/master/LICENSE'}
              name={'License'}
            />
            <Path
              path={'https://github.com/hi-matbub/flexbox/issues'}
              name={'Report a bug'}
            />
          </div>
        </div>
      </section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <small
          style={{
            // prettier-ignore
            fontFamily: '\'Rubik\', sans-serif'
          }}>
          <i>
            © {date}
            &nbsp; | &nbsp; {'say'}
            <a
              href="mailto:hi@matbub.co"
              target="_blank"
              rel="noopener noreferrer">
              {' '}
              hi-matbub
            </a>
          </i>
        </small>
        <img
          style={{marginTop: '20px'}}
          src="https://travis-ci.com/hi-matbub/flexbox.svg?branch=master"
          alt="build status"
        />
      </div>
    </footer>
  );
};

export default Footer;