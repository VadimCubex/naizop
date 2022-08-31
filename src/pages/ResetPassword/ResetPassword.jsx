import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="reset-password container">
        <div className="reset-password-background"></div>
        <div className="block">
          <div className="logo">
            <SvgIcon size={48} src={IconsVariants.Logo} />
            <Text variant={TextVariants.h1_medium}>Naizop</Text>
          </div>
          <div className="separator"></div>
          <Text variant={TextVariants.title}>Reset password</Text>
          <div className="reset-password-input">
            <Text variant={TextVariants.h3}>E-mail Address</Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail..."
            />
          </div>
          <Button
            variant={ButtonVariants.crypto}
            text="Send Instruction"
            width="full"
            size={ButtonSizeVariants.extra_large}
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
