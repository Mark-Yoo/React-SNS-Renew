// Next에서는 다음 React를 import하는 구문이 필요하지 않다.
import React from "react";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next</div>
    </AppLayout>
  );
};

export default Home;
