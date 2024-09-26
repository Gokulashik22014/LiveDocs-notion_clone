import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

const SideBarCard = ({ id, href }: { id: string; href: string }) => {
  const [data, isLoading, error] = useDocumentData(doc(db, "documents", id));
    const pathName=usePathname()
    const isActive=pathName.includes(id) && pathName !== "/"
  return (
    <Link href={href} className={`px-2 py-1 rounded-lg border  justify-center flex mt-2 ${isActive ?" border border-solid bg-black text-white bg-transparent/45":"border-solid border-black  bg-white "}`}>
      <h1>{data?.title}</h1>
    </Link >
  );
};

export default SideBarCard;
