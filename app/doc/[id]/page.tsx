"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { FormEvent, useEffect, useState, useTransition } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

const DocPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [data, isLoading, error] = useDocumentData(
    doc(db, "documents", id as string)// the hook monitors this docs which means when doc updated the hook re fetches data
  );
  const [isUpdating, startTransition] = useTransition();
  useEffect(() => {
    if (!data) return;
    setTitle(data.title);
  }, [data]);

  const updateHandler = (e: FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await updateDoc(doc(db, "documents", id as string), {
        title: title,
      });
    });
  };
  return (
    <div className="mt-3">
      {/* Header */}
      <div className="flex max-w-4xl mx-auto">
        <form onSubmit={updateHandler} className="flex flex-1 space-x-2">
          <Input onChange={(e) => setTitle(e.target.value)} value={title} />
          <Button disabled={isUpdating} type="submit">
            {isUpdating ? "Updating...." : "Update"}
          </Button>
        </form>
      </div>
      {/* Manager Users */}
      <div></div>
      {/* Editor */}
      <div></div>
    </div>
  );
};

export default DocPage;
