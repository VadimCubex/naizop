import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { AccountCard } from "../../components/Cards";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { Plan } from "../../components/Plan";
import { Select } from "../../components/Select";
import { SliderOrder } from "../../components/SliderOrder";
import { Steper } from "../../components/Steper";
import { SvgIcon } from "../../components/SvgIcon";
import { TabPanel } from "../../components/Tabs";
import { Text } from "../../components/Text";
import {
  Addons,
  Countries,
  DefaultPlan,
  SelectPhotos,
  SelectPhotos2,
  SelectPhotos3,
  SelectPhotos4,
  SlidesOrderDetail,
} from "./constants";
import {
  AccountCardVariants,
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  CryptoIcons,
  IconsVariants,
  PaymentsIcons,
  SelectOptionVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const OrderDetail = () => {
  const [Social] = useState(JSON.parse(localStorage.getItem("social")));
  const [Category] = useState(JSON.parse(localStorage.getItem("category")));
  const [plans] = useState(createPlan());
  const [activeStep, setActiveStep] = useState(0);

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedCountry, setSelectedCountry] = useState(Countries[0]);
  const [selectedState, setSelectedStates] = useState(
    selectedCountry.states[0]
  );
  const [selectedAddons, setSelectedAddons] = useState({});

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sms, setSms] = useState(false);

  const [isMore, setIsMore] = useState(true);
  const [photos, setPhotos] = useState([...SelectPhotos, ...SelectPhotos2]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [quick, setQuick] = useState(false);

  const navigate = useNavigate();

  const handleClickMore = () => {
    setPhotos([...photos, ...SelectPhotos3, ...SelectPhotos4]);
    setIsMore(false);
  };

  const handleClickContinue = () => {
    setActiveStep(2);
  };

  function createPlan() {
    const new_plan = [];
    DefaultPlan.forEach((item) => {
      const itemForPlan = {};
      itemForPlan.title =
        Social.title + " - " + item.title + " " + Category.value;
      itemForPlan.icon = Social.icon;
      itemForPlan.icon_stroke = Social.icon_stroke;
      itemForPlan.price = item.price;
      itemForPlan.count = item.title;

      new_plan.push(itemForPlan);
    });
    return new_plan;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  return (
    <>
      <div className="order-detail container">
        <div className="order-detail-background"></div>
        <Text variant={TextVariants.title}>Order Detail</Text>
        <Steper active={activeStep} steps={[...Array(3)]} />
        <TabPanel active={activeStep} index={0}>
          <div className="order-detail-contant">
            <div className="block">
              <div className="info">
                <div className="username">
                  <div>
                    <SvgIcon src={Social.icon} size={24} />
                  </div>
                  <Text variant={TextVariants.h3}>{Social.title} Username</Text>
                </div>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter the link of your post..."
                />
              </div>
              <div className="info">
                <Text variant={TextVariants.h3}>E-mail Address</Text>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the link of your post..."
                />
              </div>
              <div className="info">
                <Text variant={TextVariants.h3}>Phone Number</Text>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter the link of your post..."
                />
              </div>
              <div className="info select-plan">
                <Text variant={TextVariants.h3}>Selected plan</Text>
                <Select
                  onClick={setSelectedPlan}
                  selected={selectedPlan}
                  variant={SelectOptionVariants.default}
                  options={plans}
                />
              </div>
              <div className="sms">
                <Checkbox
                  value={sms}
                  onChange={() => setSms(!sms)}
                  text="I want to recieve SMS about my order"
                />
              </div>
              <div className="continue">
                <Button
                  onClick={() => setActiveStep(1)}
                  variant={ButtonVariants.crypto}
                  size={ButtonSizeVariants.extra_large}
                  text="Continue"
                />
                <Text variant={TextVariants.h1}>${selectedPlan.price}</Text>
              </div>
            </div>
            <div className="order-slider">
              <SliderOrder slides={SlidesOrderDetail} />
            </div>
          </div>
        </TabPanel>
        <TabPanel active={activeStep} index={1}>
          <div className="order-detail-contant-2">
            <div className="top">
              <Plan plan={selectedPlan} />
            </div>
            <div className="block">
              <Text variant={TextVariants.h3}>
                Please select the photos you want send likes
              </Text>
              <div className="photos-container">
                {photos.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhotos([...selectedPhotos, item])}
                    className="photo-container cursor-pointer"
                  >
                    <img
                      className="photo"
                      src={item.img}
                      alt={`your-${index}`}
                    />
                    <div className="photo-info">
                      <SvgIcon
                        src={IconsVariants.Heart_stroke}
                        size={16}
                        color={ColorSvgVariants.white}
                      />
                      <Text variant={TextVariants.h5_regular}>
                        {item.count}{" "}
                        {selectedPhotos.includes(item) && (
                          <Text variant={TextVariants.h5}>
                            + {selectedPlan.count}
                          </Text>
                        )}
                      </Text>
                    </div>
                    {selectedPhotos.includes(item) && (
                      <div className="selected"></div>
                    )}
                  </div>
                ))}
              </div>
              <Button
                text={isMore ? "Show more photos" : "Continue"}
                onClick={isMore ? handleClickMore : handleClickContinue}
                variant={ButtonVariants.crypto}
                size={ButtonSizeVariants.extra_large}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel active={activeStep} index={2}>
          <div className="order-detail-contant-2">
            <div className="top">
              <Plan plan={selectedPlan} />
            </div>
            <div className="block">
              <Text variant={TextVariants.h3}>Billing Address</Text>
              <div className="info-container">
                <div className="info">
                  <Text variant={TextVariants.h3}>First Name</Text>
                  <Input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="First Name"
                  />
                </div>
                <div className="info">
                  <Text variant={TextVariants.h3}>Last Name</Text>
                  <Input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="info">
                <Text variant={TextVariants.h3}>Address</Text>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street Address"
                />
              </div>
              <div className="info-container">
                <div className="info select-country">
                  <Text variant={TextVariants.h3}>Country</Text>
                  <Select
                    variant={SelectOptionVariants.default}
                    selected={selectedCountry}
                    additionalOnClick={setSelectedStates}
                    onClick={setSelectedCountry}
                    options={Countries}
                  />
                </div>
                <div className="info select-state">
                  <Text variant={TextVariants.h3}>State</Text>
                  <Select
                    variant={SelectOptionVariants.default}
                    selected={selectedState}
                    onClick={setSelectedStates}
                    options={selectedCountry.states}
                  />
                </div>
              </div>
              <div className="info-container">
                <div className="info">
                  <Text variant={TextVariants.h3}>City</Text>
                  <Input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                </div>
                <div className="info">
                  <Text variant={TextVariants.h3}>Postal Code</Text>
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <div className="quick-order">
                <Checkbox
                  text="Enable QuickOrder"
                  value={quick}
                  onChange={() => setQuick(!quick)}
                />
                <SvgIcon src={IconsVariants.Question} size={20} />
              </div>
              <div className="addons">
                <Text variant={TextVariants.h3}>Add-ons:</Text>
                <div className="addons-container">
                  {Addons.map((item, index) => (
                    <AccountCard
                      className={`column cursor-pointer ${
                        item === selectedAddons ? "active" : ""
                      }`}
                      tooltip={item.tooltip}
                      key={index}
                      onClick={() => setSelectedAddons(item)}
                      variant={AccountCardVariants.lg}
                      text={item.text}
                      subtitle={item.subtitle}
                    />
                  ))}
                </div>
              </div>
              <div className="pay">
                <Button
                  variant={ButtonVariants.crypto}
                  size={ButtonSizeVariants.extra_large}
                  text="Pay with Credit Card"
                  onClick={() => {
                    navigate("/compleled-order");
                  }}
                />
                <Button
                  variant={ButtonVariants.crypto}
                  size={ButtonSizeVariants.extra_large}
                  text="Pay with Crypto"
                  onClick={() => {
                    navigate("/compleled-order");
                  }}
                />
              </div>
              <div className="payments">
                <Text variant={TextVariants.h5_regular}>
                  By completing your order, you agree to the{" "}
                  <Text variant={TextVariants.h5}>terms & conditions</Text> and{" "}
                  <Text variant={TextVariants.h5}>privacy policy.</Text>
                </Text>
                <div className="icons">
                  <div className="payment-icons">
                    {Object.values(PaymentsIcons).map((item, index) => (
                      <SvgIcon key={index} src={item} size={48} />
                    ))}
                  </div>
                  <div className="currency-icons">
                    {Object.values(CryptoIcons).map((item, index) => (
                      <div key={index}>
                        <img src={item} alt="crypto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default OrderDetail;
