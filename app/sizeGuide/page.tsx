import { getProfileAction } from "../profile/actions";
import SizeGuide from "./SizeGuidePage";

export default async function SizeGuidePage() {
    const userData = await getProfileAction("9aa00be0-9ac5-4235-88b2-418ed1ee89c9")
    return (<SizeGuide userData={userData} />)
}