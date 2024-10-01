import React from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
const CustomRoomProvider = ({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<LoadingSpinner/>}>{children}</ClientSideSuspense>
    </RoomProvider>
  );
};

export default CustomRoomProvider;
