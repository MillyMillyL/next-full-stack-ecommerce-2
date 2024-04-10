import { ProductCardSkeleton } from "@/components/ProductCard";
import React, { Suspense } from "react";
import { ProductSuspense } from "../page";
import db from "@/db/db";
import cache from "@/lib/cache";

function ProductsPage() {
  const getAllProducts = cache(
    () => {
      return db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { name: "asc" },
      });
    },
    ["/products", "getAllProducts"],
    {}
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductSuspense productsFetcher={getAllProducts} />
      </Suspense>
    </div>
  );
}

export default ProductsPage;
