import React, { useEffect } from "react";
import "./productSummary.scss";
import { TbShoppingCartX } from "react-icons/tb";
import { BiCategory, BiDollarCircle, BiCart } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectCategory,
  selectOutOfStock,
  selectTotalStoreValue,
} from "../../../redux/features/product/productSlice";
import getBalances from "../../../redux/features/balance";
import { useState } from "react";

// Icons
const earningIcon = <BiDollarCircle size={24} color="#fff" />;
const productIcon = <BiCart size={24} color="#fff" />;
const categoryIcon = <BiCategory size={24} color="#fff" />;
const outOfStockIcon = <TbShoppingCartX size={24} color="#fff" />;
const balanceIcon = <MdOutlineAccountBalanceWallet size={24} color= "#fff" />

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const outOfStock = useSelector(selectOutOfStock);
  const category = useSelector(selectCategory);
  const [balance, setBalance] = useState("");

useEffect(()=>{
  fetchBalance();
},[])

const fetchBalance = async () => {
  try {
    const response = await getBalances();
    console.log(response);
    const balanceValue = response.data.balance;
    setBalance(balanceValue);
  } catch (error) {
    console.error(error);
  }
};
  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
    dispatch(CALC_OUTOFSTOCK(products));
    dispatch(CALC_CATEGORY(products));
  }, [dispatch, products]);

  return (
    <div className="product-summary">
      <h3 className="--mt">Status Inventori</h3>
      <div className="info-summary">
        <InfoBox
          icon={productIcon}
          title={"Total Jumlah Barang"}
          count={products.length}
          bgColor="card1"
        />
        <InfoBox
          icon={earningIcon}
          title={"Total Nilai Barang"}
          count={`Rp${formatNumbers(totalStoreValue.toFixed(2))}  `}
          bgColor="card2"
        />
        <InfoBox
          icon={outOfStockIcon}
          title={"Barang Habis"}
          count={outOfStock}
          bgColor="card3"
        />
        <InfoBox
          icon={categoryIcon}
          title={"Jumlah Kategori"}
          count={category.length}
          bgColor="card4"
        />
        <InfoBox
          icon= {balanceIcon}
          title={"Saldo"}
          count={`Rp${formatNumbers(parseInt(balance).toFixed(2))}`}
          bgColor="card5"
        />
      </div>
    </div>
  );
};

export default ProductSummary;
