// app/profile/page.tsx (Server Component, sin "use client")
import { getProfileAction } from "./actions"
import ProfilePageClient from "./ProfilePageClient"

export default async function ProfilePage() {
    const userData = await getProfileAction("5e6b8a3a-a60b-4ba7-8528-6f689a213139") // llamada server
    console.log('userData :', userData);

    return <ProfilePageClient userData={userData} />
}
