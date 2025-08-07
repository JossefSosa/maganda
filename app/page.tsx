
import Home from "@/components/home/home";
import { getProductsFeaturedAction } from "@/serverActions/productsActions";

export default async function HomePage() {
  const productsData = await getProductsFeaturedAction();
  return (<Home products={productsData} />)
}