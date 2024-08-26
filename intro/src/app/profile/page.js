import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const profileDeleted = true;

  if (profileDeleted) redirect("/posts");
  return <div>ProfilePage</div>;
};

export default ProfilePage;
