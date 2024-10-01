"use client";
import React from "react";
import { LiveblocksProvider } from "@liveblocks/react/suspense";
import { error } from "console";
const CustomLiveBlocksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    if(!process.env.NEXT_PUBLIC_CLERK_LIVEBLOCKS_KEY) throw new Error("No env configured")
  return (
    <LiveblocksProvider
    throttle={16}
      authEndpoint={"/auth-endpoint"}
    >
      {children}
    </LiveblocksProvider>
  );
};

export default CustomLiveBlocksProvider;
