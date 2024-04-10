import React from "react";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../../_components/ProductForm";
import db from "@/db/db";

async function EditProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await db.product.findUnique({ where: { id } });
  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product} />
    </>
  );
}

export default EditProductPage;
