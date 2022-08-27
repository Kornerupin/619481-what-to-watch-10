import {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Error404 = () => (
  <Fragment>
    <h1>404</h1>
    <h3>Page not found</h3>
    <Link to={'/'}>На главную</Link>
  </Fragment>
);

export default Error404;
