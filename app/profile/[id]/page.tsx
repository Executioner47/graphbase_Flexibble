import React from "react";
import { getUserProjects } from "@/lib/actions";
import { UserProfile } from "@/common.types";
import ProfilePage from "@/Components/ProfilePage";

const UserProfile = async ({ params: { id } }: { params: { id: string } }) => {
  const result = (await getUserProjects(id, 100)) as { user?: UserProfile };
  if (!result?.user) {
    return <div className="no-result-text">User not found</div>;
  }
  return <ProfilePage user={result?.user} />;
};

export default UserProfile;
