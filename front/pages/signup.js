import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>회원가입 | React-SNS</title>
      </Head>
      <AppLayout>
        <div>회원가입 페이지</div>
      </AppLayout>
    </>
  );
};

export default Signup;
