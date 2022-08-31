import Logo from '../../components/logo/logo';
import {memo} from 'react';

const Footer = () => (
  <footer className='page-footer'>
    <Logo isLight />

    <div className='copyright'>
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default memo(Footer);
