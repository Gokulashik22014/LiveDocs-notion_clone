"use client";
import {
  SignedOut,
  useUser,
  SignedIn,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-between px-4 py-2 border border-solid">
      <div className="flex space-x-6 items-center">
        <div className="flex items-center justify-center space-x-3 rounded-md p-1">
          <div>
            <img
              src={"/images/logo.png"}
              alt=""
              className="h-9 w-9 rounded-full"
            />
          </div>
          <h1 className="text-purple-500 text-2xl uppercase ">LiveDocs</h1>
        </div>
        {user && (
          <h1>
            {user?.firstName}
            {`'s`} Docs
          </h1>
        )}
      </div>
      {/* Breadcrums like show the path the user exist fancy stuff bro really good */}

      <div className="flex justify-end flex-1">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
