import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';

import wrapper from '../store/configureStore';

const ReactSNS = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>React-SNS</title>
    </Head>
    <Component />
  </>
);

ReactSNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(ReactSNS));
