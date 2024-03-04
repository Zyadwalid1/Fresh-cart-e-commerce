import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { CartContext } from "../../Context/CartContext";
import AddressCheckoutForm from "../AddressCheckoutForm/AddressCheckoutForm";

export default function OnlineAddressForm() {
  const { payOnline } = useContext(CartContext);

  async function onlinePayment(id, value) {
    const { data } = await payOnline(
      id,
      "https://zyadwalid1.github.io/Fresh-cart-e-commerce/#/",
      value
    );

    if (data?.status === "success") {
      window.location.href = data.session.url;
    }
  }
  return (
    <>
      <Helmet>
        <title>OnlineAddressForm</title>
        <meta name="description" content="OnlineAddressForm Page" />
      </Helmet>
      <AddressCheckoutForm submitFn={onlinePayment} btnTxt="Pay Online" />
    </>
  );
}
