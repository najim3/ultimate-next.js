"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  // const profileDeleted = true;
  const pathName = usePathname();
  console.log("pathname from clinet component: ", pathName);

  const searchParams = useSearchParams();
  console.log("searchParams: ", searchParams.get("search"));

  // if (profileDeleted) redirect("/posts");
  return <div>ProfilePage</div>;
};

export default ProfilePage;
