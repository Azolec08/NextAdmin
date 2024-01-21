"use client";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <h1 className="text-2xl text-center">
        The Page you are looking for Cannot Be Found, Go Back to
        <br />
        <Link href="/dashboard">
          <span className="text-blue-700">Dashboard</span>
        </Link>
      </h1>
    </div>
  );
};

export default Notfound;
