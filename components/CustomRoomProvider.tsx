import React from "react";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
import CustomLiveCursorProvider from "./CustomLiveCursorProvider";
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
      <ClientSideSuspense fallback={<LoadingSpinner />}>
        <CustomLiveCursorProvider>{children}</CustomLiveCursorProvider>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CustomRoomProvider;
