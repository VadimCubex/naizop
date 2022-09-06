import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="register container">
        <div className="register-background"></div>
        <div className="block">
          <div className="logo">
            <SvgIcon size={48} src={IconsVariants.Logo} />
            <Text variant={TextVariants.h1_medium}>Naizop</Text>
          </div>
          <div className="separator"></div>
          <Text variant={TextVariants.title}>Registration</Text>

          <div className="register-input">
            <Text variant={TextVariants.h3}>Username</Text>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username..."
            />
          </div>
          <div className="register-input">
            <Text variant={TextVariants.h3}>E-mail Address</Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail..."
            />
          </div>
          <div className="register-input">
            <Text variant={TextVariants.h3}>Password</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
            />
          </div>
          <div className="register-input">
            <Text variant={TextVariants.h3}>Confirm password</Text>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password..."
            />
          </div>
          <div className="register-checkbox">
            <Checkbox value={terms} onChange={() => setTerms(!terms)} />
            <Text variant={TextVariants.h5_regular}>
              I have read and agreed with{" "}
              <Text variant={TextVariants.h5}> Terms of Service</Text>
            </Text>
          </div>
          <Button
            variant={ButtonVariants.crypto}
            text="Sign Up"
            size={ButtonSizeVariants.extra_large}
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
