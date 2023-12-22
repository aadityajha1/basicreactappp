import React, { useEffect, useState } from "react";
import Table from "./table";

const rows = [
  { id: 1, displayName: "ID", value: "id" },
  { id: 2, displayName: "Name", value: "title" },
  { id: 3, displayName: "Price", value: "price" },
  { id: 4, displayName: "Category", value: "category" },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://dummyjson.com/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result.products);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <h1>Products Page</h1>
      <Table rows={rows} datas={products} />
    </>
  );
};

export default Products;
