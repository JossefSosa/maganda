export const dynamic = "force-dynamic";

import Home from "@/components/home/home";
import { getProductsFeaturedAction } from "@/serverActions/productsActions";
// import { notFound } from "next/navigation";

export default async function HomePage() {
  const productsData = await getProductsFeaturedAction();
  // if (!productsData || "error" in productsData) {
  // return notFound()
  // }
  return (<Home products={productsData} />)
}