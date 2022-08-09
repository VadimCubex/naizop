import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const PaymentError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="payment-error">
        <Text variant={TextVariants.h4}>
          <Link to="/profile/add-funds">
            <Text>Add funds -</Text>
          </Link>{" "}
          Payment error
        </Text>
        <div className="payment-error-content">
          <Text variant={TextVariants.h1}>
            Sorry! A payment error has occurred!
          </Text>
          <img src={ImagesVariants.Card} alt="Card" />
          <Button
            text="Try again"
            width="full"
            onClick={() => navigate("/profile/add-funds")}
            isLight={true}
            variant={ButtonVariants.blue}
            size={ButtonSizeVariants.medium}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentError;
