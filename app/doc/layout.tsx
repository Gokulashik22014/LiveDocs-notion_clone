import CustomLiveBlocksProvider from "@/components/CustomLiveBlocksProvider";
import React from "react";

const DocLayout = ({ children }: { children: React.ReactNode }) => {
  return <CustomLiveBlocksProvider>{children}</CustomLiveBlocksProvider>;
};

export default DocLayout;
