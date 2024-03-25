import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookChat = () => {
  return (
    <FacebookProvider appId="1159901798054522" chatSupport>
      <CustomChat
        pageId="104720494470310"
        themeColor="green"
        minimized={true}
      />
    </FacebookProvider>
  );
};

export default FacebookChat;
