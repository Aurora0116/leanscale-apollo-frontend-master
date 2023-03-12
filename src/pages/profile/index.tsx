import React, { useEffect } from "react";
import type { NextPage } from "next";
import Router from "next/router";
const Profile: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/profile") {
      Router.push("/profile/addresses");
    }
  });
  return <div></div>;
};

export default Profile;
