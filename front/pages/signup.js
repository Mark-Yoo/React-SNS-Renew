import React, { useCallback } from "react";
import Head from "next/head";
import { Form, Input } from "antd";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePw] = useInput("");
  const [nickname, onChangeNick] = useInput("");

  const onSubmit = useCallback(() => {}, []);

  return (
    <>
      <AppLayout>
        <Head>
          <meta charSet="utf-8" />
          <title>회원가입 | React-SNS</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              value={nickname}
              required
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              value={password}
              required
              onChange={onChangePw}
            />
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
