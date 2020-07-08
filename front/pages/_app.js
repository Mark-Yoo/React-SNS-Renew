import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const ReactSNS = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>React-SNS</title>
      </Head>
      <Component />
    </>
  );
};

ReactSNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default ReactSNS;
