import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CategorySingleCard from "../components/partials/CategoryCard/CategorySingleCard";
import JuanValdezAvatar from "../assets/juanvaldezavatar.png";
import CommentCard from "../components/partials/CommentCard/CommentCard";
import ProductCard from "../components/partials/ProductCard/ProductCard";
import PaymentButton from "../payments/PaymentButton";
import BackButton from "../components/partials/BackButton/BackButton";
import { getEntrepreneurshipById } from "../services/entrepreneurships.service";

export default function SingleEntrepreneurship() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [stripeToken, setStripeToken] = useState(null);

  const getEntrepreneurship = async () => {
    const { data } = await getEntrepreneurshipById(id);
    setData(data.entrepreneurship);
  };

  function handleToken(token) {
    setStripeToken(token);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se ha realizado el pago con éxito!",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  useEffect(() => {
    getEntrepreneurship();
  }, [id]);

  return (
    <div>
      <CategorySingleCard title={data.title} image={data.product_img} />

      <div className="px-2 md:px-20">
        <BackButton />
        <ProductCard
          rating={data.avg_score}
          title={data.title}
          description={data.description}
          price={data.price}
        />
        <StripeCheckout
          stripeKey="pk_test_51Mgl0xL744SSmgAvzusTV8spcJCMMjINutqizGKPX6o4vDvO0tokDwp5JzOzwRTzq1t7gQjcWXg1HKpgLplIwixC00Zou3asIE"
          token={handleToken}
          amount={data.price * 100} // use the amount value from state
          name={data.title} // use the name value from state
          description={data.description} // use the description value from state
          currency="EUR"
        >
          <PaymentButton />
        </StripeCheckout>

        <section className="p-2 flex flex-col gap-3">
          <h2 className="font-semibold font-title text-medium">
            Gestionado por
          </h2>
          <div className="flex flex-row gap-4">
            <img
              src={JuanValdezAvatar}
              className="m-2 object-cover w-auto h-auto border-2 border-blue-700 rounded-full"
              alt="avatar"
            />
            <h2 className="mt-8 font-medium font-title text-sm">{data.name}</h2>
          </div>
        </section>

        <h2 className="p-2 font-semibold font-title text-medium">Opiniones</h2>
        <CommentCard />
      </div>
    </div>
  );
}
