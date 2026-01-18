import React, { useMemo, useState } from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const Home = () => {

  const [topBrandsProducts, setTopBrandsProducts] = useState([]);

  const bestSellerProducts = topBrandsProducts.map((brand, index) => ({
    _id: `brand-${index}`,
    img: brand.src,
    title: brand.name,
    sellPrice: 0,
    mrp: 0,
    discount: 0,
    brand: brand.name,
    category: "unisex",
    rating: 5,
  }));

  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands setTopBrandsProducts={setTopBrandsProducts} />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="prose prose-2xl">
          <ShopBy title="Best Sellers" filter="bestSellers" products={bestSellerProducts} />
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
