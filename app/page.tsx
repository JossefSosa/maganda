import Home from "@/components/home/home";
import { getProfileAction } from "./profile/actions";
export default async function HomePage() {
  const userData = await getProfileAction("9aa00be0-9ac5-4235-88b2-418ed1ee89c9") // llamada server
  return (<Home userData={userData} />)
}