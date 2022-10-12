import React from "react";
import { useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ImagesVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Page404 = ({ container, className }) => {
  const Page404Class = classNames(
    "page-404",
    { container: container },
    className
  );

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={Page404Class}>
        <div className="error">
          <Text variant={TextVariants.h1}>ERROR</Text>
          <img src={ImagesVariants[404]} alt="404" srcSet="" />
        </div>
        <Text variant={TextVariants.h1}>Page not found</Text>
        <Button
          onClick={() => navigate(container ? "/" : "/profile/")}
          text="Go back"
          variant={ButtonVariants.yellow}
          size={ButtonSizeVariants.large}
          isLight={true}
          width="full"
        />
      </div>
    </>
  );
};

export default Page404;
