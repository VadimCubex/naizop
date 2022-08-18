import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { SalesCard } from "../../components/Cards";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { ReasonsToUse } from "../../components/ReasonsToUse";
import { Select } from "../../components/Select";
import { SvgIcon } from "../../components/SvgIcon";
import { Tab, TabPanel, Tabs } from "../../components/Tabs";
import { Text } from "../../components/Text";
import { Trustpilot } from "../../components/Trustpilot";
import { CategoryToIncrease, TabsName, SaleForCategory } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  ColorSvgVariants,
  IconsVariants,
  SelectOptionVariants,
  TabsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const BestQualityService = () => {
  const [highModal, setHighModal] = useState(false);
  const [premiumModal, setPremiumModal] = useState(false);
  const [countingSales, setCountingSales] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [activeSale, setActiveSale] = useState({});
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [activeSocial, setActiveSocial] = useState(TabsName[0]);
  const [selectedCategory, setSelectedCategory] = useState(
    CategoryToIncrease[0]
  );
  const navigate = useNavigate();

  const handleClickContinue = () => {
    navigate("/order-detail");
    localStorage.setItem("social", JSON.stringify(activeSocial));
    localStorage.setItem("category", JSON.stringify(selectedCategory));
  };

  const handleClickTab = (event, active) => {
    setActiveTab(active);
  };

  const handleClickSubTab = (event, active) => {
    setActiveSubTab(active);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="best-quality-service container background-img">
        <div className="best-quality-service-contant">
          <Tabs
            variant={TabsVariants.Default}
            active={activeTab}
            onClick={handleClickTab}
          >
            {TabsName.map((item, index) => (
              <Tab
                key={index}
                titleComponent={
                  <>
                    <div
                      onClick={() => {
                        setActiveSocial(item);
                      }}
                      className="tab-title"
                    >
                      <SvgIcon src={item.icon} />
                      <Text variant={TextVariants.h2_medium}>{item.title}</Text>
                    </div>
                    {activeTab - 1 === index ||
                      (activeTab !== index && index !== TabsName.length - 1 && (
                        <div className="separator"></div>
                      ))}
                  </>
                }
              />
            ))}
          </Tabs>
          <div className="select-tab">
            <Select
              onClick={setActiveSocial}
              selected={activeSocial}
              variant={SelectOptionVariants.default}
              options={TabsName}
            />
          </div>
          <div className="top">
            <Trustpilot />
            <div className="category">
              <Select
                onClick={setSelectedCategory}
                selected={selectedCategory}
                variant={SelectOptionVariants.default}
                options={CategoryToIncrease}
              />
            </div>
            <div className="motivation">
              <div>
                <SvgIcon src={activeSocial.icon} size={32} />
              </div>
              <Text variant={TextVariants.title}>
                Buy {activeSocial.title} {selectedCategory.title} with NAIZOP
              </Text>
            </div>
            <div className="motivation">
              <div>
                <SvgIcon
                  src={activeSocial.icon_stroke}
                  color={ColorSvgVariants.white}
                  size={24}
                />
              </div>
              <Text className="circe">
                At NAIZOP, you can buy {activeSocial.title}{" "}
                {selectedCategory.value} quickly, safely and easily with just a
                few clicks. See our deals below!
              </Text>
            </div>
          </div>
          <div className="quality">
            <Tabs
              active={activeSubTab}
              onClick={handleClickSubTab}
              variant={TabsVariants.Outline}
            >
              <Tab
                titleComponent={
                  <div className="subtab-title">
                    <div className="info">
                      <SvgIcon
                        src={activeSocial.icon_stroke}
                        color={ColorSvgVariants.white}
                      />
                      <Text variant={TextVariants.h3}>
                        High Quality {selectedCategory.title}
                      </Text>
                    </div>
                    <SvgIcon
                      onClick={(event) => {
                        setHighModal(true);
                        event.stopPropagation();
                      }}
                      src={IconsVariants.Question}
                      color={ColorSvgVariants.white}
                      size={20}
                    />
                  </div>
                }
              />
              <Tab
                titleComponent={
                  <div className="subtab-title">
                    <div className="info">
                      <SvgIcon
                        src={activeSocial.icon_stroke}
                        color={ColorSvgVariants.white}
                      />
                      <Text variant={TextVariants.h3}>
                        Premium Quality {selectedCategory.title}
                      </Text>
                    </div>
                    <SvgIcon
                      onClick={(event) => {
                        setPremiumModal(true);
                        event.stopPropagation();
                      }}
                      src={IconsVariants.Question}
                      color={ColorSvgVariants.white}
                      size={20}
                    />
                  </div>
                }
              />
            </Tabs>
            <TabPanel active={activeSubTab} index={0}>
              <div className="sales-container">
                <div className="cards">
                  {SaleForCategory.map((item, index) => (
                    <SalesCard
                      onClick={() => setActiveSale(item)}
                      key={index}
                      item={item}
                      category={selectedCategory.value}
                      active={activeSale}
                    />
                  ))}
                </div>
                <Text variant={TextVariants.h3}>Or Enter another quantity</Text>
                <div className="sales-counting">
                  <div className="sales-input">
                    <Input
                      placeholder="Enter quantity..."
                      value={countingSales}
                      onChange={(e) => setCountingSales(e.target.value)}
                    />
                  </div>
                  <div className="continue">
                    <div className="info">
                      <Text variant={TextVariants.h5_regular}>
                        You Save ${activeSale.sale || 25}
                      </Text>
                      <div className="separator"></div>
                      <Text variant={TextVariants.h1_medium}>$99</Text>
                    </div>
                    <Button
                      onClick={handleClickContinue}
                      variant={ButtonVariants.crypto}
                      size={ButtonSizeVariants.extra_large}
                      text="Continue"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel active={activeSubTab} index={1}></TabPanel>
          </div>
          <ReasonsToUse />
        </div>
        <Modal
          className="high-quality"
          onClick={() => setHighModal(false)}
          title={`High Quality ${selectedCategory.title}`}
          isOpen={highModal}
        >
          <ul>
            <li>
              <Text variant={TextVariants.h5_regular}>
                <Text variant={TextVariants.h5}>REAL</Text>{" "}
                {selectedCategory.value} from{" "}
                <Text variant={TextVariants.h5}>REAL</Text> people{" "}
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Guaranteed{" "}
                <Text variant={TextVariants.h5}>Instant Delivery</Text>
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Option to{" "}
                <Text variant={TextVariants.h5}>
                  SPLIT {selectedCategory.title}
                </Text>{" "}
                on multiple pictures
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Includes video views
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                <Text variant={TextVariants.h5}>No password</Text> required
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Fast Delivery{" "}
                <Text variant={TextVariants.h5}>(gradual or instant)</Text>
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                <Text variant={TextVariants.h5}>24/7</Text> support
              </Text>
            </li>
          </ul>
        </Modal>
        <Modal
          className="premium-quality"
          onClick={() => setPremiumModal(false)}
          title={`Premium Quality ${selectedCategory.title}`}
          isOpen={premiumModal}
        >
          <ul>
            <li>
              <Text variant={TextVariants.h5_regular}>
                <Text variant={TextVariants.h5}>REAL</Text>{" "}
                {selectedCategory.value} from{" "}
                <Text variant={TextVariants.h5}>REAL</Text> people{" "}
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Increased chance to reach{" "}
                <Text variant={TextVariants.h5}>explore page</Text>
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Guaranteed{" "}
                <Text variant={TextVariants.h5}>Instant Delivery</Text>
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Option to{" "}
                <Text variant={TextVariants.h5}>
                  SPLIT {selectedCategory.title}
                </Text>{" "}
                on multiple pictures
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Includes video views
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                <Text variant={TextVariants.h5}>No password</Text> required
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                Fast Delivery{" "}
                <Text variant={TextVariants.h5}>(gradual or instant)</Text>
              </Text>
            </li>
            <li>
              <Text variant={TextVariants.h5_regular}>
                <Text variant={TextVariants.h5}>24/7</Text> support
              </Text>
            </li>
          </ul>
        </Modal>
      </div>
    </>
  );
};

export default BestQualityService;
