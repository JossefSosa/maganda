export const dynamic = 'force-dynamic'

import CollectionsPage from "./CollectionsPage";
import { getAllCollectionsWithProductsAction } from "@/serverActions/collectionsActions";

export default async function Collections() {
    const { collections, collectionProducts } = await getAllCollectionsWithProductsAction();

    return (
        <CollectionsPage
            collections={collections}
            collectionProducts={collectionProducts}
        />
    );
}
