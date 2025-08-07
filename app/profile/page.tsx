

import { getProfileAction } from "@/serverActions/userActions"
import ProfilePage from "./ProfilePage"

export default async function Profile() {
  const userData = await getProfileAction("e0f79244-e1b9-48db-ad23-c1e9e926b9c5")

  return <ProfilePage userData={userData} />
}
