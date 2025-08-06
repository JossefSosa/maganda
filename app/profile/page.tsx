
import { getProfileAction } from "./actions"  // o desde donde exportes tu server action
import ProfilePage from "./ProfilePage"

export default async function Profile() {
  const userData = await getProfileAction("9aa00be0-9ac5-4235-88b2-418ed1ee89c9")

  return <ProfilePage userData={userData} />
}
