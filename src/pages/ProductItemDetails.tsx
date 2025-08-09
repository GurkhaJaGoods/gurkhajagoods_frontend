import { LoaderCircle, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function ProductItemDetail({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.sale_price ? product.sale_price : product.price
  );

  // data for send

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:p-7 bg-white text-black ">
      {/* Image */}
      <img
        src={product?.image}
        alt="image"
        width={300}
        height={300}
        className="bg-slate-200 p-2 mx-auto md:mx-0 md:p-5 h-[100px] w-auto md:h-[320px] md:w-[300px] object-contain rounded-lg"
      />

      {/* Information */}
      <div className="flex flex-col gap-1 md:gap-3 text-left">
        <h2 className="text-lg md:text-2xl font-bold">{product.name}</h2>
        <h2 className="text-sm text-gray-500">{product.description}</h2>
        <div className="flex gap-3">
          From
          {product.sale_price && (
            <h2 className="font-bold text-lg md:text-3xl">
              €{product.sale_price}
            </h2>
          )}
          <h2
            className={`font-bold text-lg md:text-3xl ${
              product.price && "line-through text-red-400"
            }`}>
            €{product.price}
          </h2>
        </div>
        <h2 className="font-medium text-lg">Quantity </h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className="flex gap-3 items-center">
            <div className="p-2 border flex gap-10 items-center px-5">
              <button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}>
                -
              </button>
              <h2>{quantity}</h2>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <h2 className="text-2xl font-bold">
              {" "}
              = €{(quantity * productTotalPrice).toFixed(2)}
            </h2>
          </div>
          <Button
            disabled={loading}
            className="flex gap-3"
            // onClick={() =>
            //   router.push(
            //     `/order-confirmation?product_id=${product.id}&quantity=${quantity}`
            //   )
            // }
          >
            <ShoppingBasket />
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Add To Cart"
            )}
          </Button>
        </div>
        <h2>
          <span className="font-bold">Category:</span> {product?.category?.name}
        </h2>
      </div>
    </div>
  );
}

export default ProductItemDetail;
