import React from "react";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/Product-list";
export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("fc33f0c6-fa9e-4b7c-b9a9-0d68fcb79d83");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
