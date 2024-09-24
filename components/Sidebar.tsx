"use client";
import React, { useEffect, useState } from "react";
import NewDocument from "./NewDocument";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import { collection, collectionGroup, query, where } from "firebase/firestore";
import { db } from "@/firebase";
interface RoomDocument {
  userId: string;
  roomId: string;
  role: "owner" | "editor";
  createdAt: string;
}
const Sidebar = () => {
  const { user } = useUser();
  const [sideBarData, setSideBarData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });
  const [data, isLoading, error] = useCollection(
    user &&
    query(
      collectionGroup(db, "rooms"),
      where("userId", "==", user.emailAddresses[0].toString())
    )
  );
  useEffect(() => {
    console.log(data)
    if (!data) return;

    // so what in the hell is this
    // we are reducing it takes two args (func,initial value)
    // the function takes accumulator and the doc as individual
    // then get the data from doc and separate it based on role
    const seprated = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, doc) => {
        const roomData = doc.data() as RoomDocument;
        if (roomData.role === "owner") {
          acc.owner.push(roomData);
        } else {
          acc.editor.push(roomData);
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setSideBarData(seprated)
    console.log(sideBarData)
  }, [data]);
  const menuOption = (
    <>
      <NewDocument />

      {/* my own documents */}
      <div className="flex flex-col mt-4 space-y-2">
        {sideBarData.owner.length>0 && sideBarData.owner.map((data)=><p>{data.userId}</p>)}
      </div>
    </>
  );
  return (
    <div className="flex flex-col px-4 py-2 bg-slate-300 w-64 items-center min-h-screen">
      {menuOption}
    </div>
  );
};

export default Sidebar;
