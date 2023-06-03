import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./ProductDetail.scss";
import DOMPurify from "dompurify";

const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  const stockStatus = (quantity) => {
    if (quantity > 0) {
      return <span className="--color-success">In Stock</span>;
    }
    return <span className="--color-danger">Out Of Stock</span>;
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className="product-detail">
      <h3 className="--mt">Detail Produk</h3>
      <Card cardClass="card">
        {isLoading && <SpinnerImg />}
        {product && (
          <div className="detail">
            {product?.image ? (
              <img
                className="prodImage"
                src={product.image}
                alt="productimage"
              />
            ) : (
              <p>Tidak ada gambar untuk barang ini</p>
            )}

            <hr />
            <h4>{product.name}</h4>

            <p>
              <b> Kategori : </b> {product.category}
            </p>
            <p>
              <b> Harga : </b> {"Rp "}
              {product.price}
            </p>
            <p>
              <b> Jumlah Stok : </b> {product.quantity}
            </p>
            <p>
              <b>Total Nilai Barang : </b> {"Rp "}
              {product.price * product.quantity}
            </p>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.desc),
              }}
            ></div>
            <hr />
            <code className="--color-dark">
              Tanggal Barang Masuk: {product.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Tanggal Terakhir Diupdate: {product.updatedAt.toLocaleString("en-US")}
            </code>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDetail;
