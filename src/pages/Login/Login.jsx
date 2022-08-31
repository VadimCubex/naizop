import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="login container">
        <div className="login-background"></div>
        <div className="block">
          <div className="logo">
            <SvgIcon size={48} src={IconsVariants.Logo} />
            <Text variant={TextVariants.h1_medium}>Naizop</Text>
          </div>
          <div className="separator"></div>
          <Text variant={TextVariants.title}>Login</Text>
          <div className="login-input">
            <Text variant={TextVariants.h3}>E-mail Address</Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail..."
            />
          </div>
          <div className="login-input">
            <Text variant={TextVariants.h3}>Password</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
            />
          </div>
          <Link to="/reset-password">
            <Text variant={TextVariants.h5}>Forgot password?</Text>
          </Link>
          <Button
            variant={ButtonVariants.crypto}
            text="Login"
            width="full"
            size={ButtonSizeVariants.extra_large}
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
