import React from "react";
import { useState } from "react";
import { useRef } from "react";

import { Button } from "../../components/Button";
import { AdvantagesCard } from "../../components/Cards";
import { Slider } from "../../components/Slider";
import { SocialeNetworks } from "../../components/SocialeNetworks";
import { Text } from "../../components/Text";
import {
  AdvantagesInfo,
  ExperienceSliderInfo,
} from "../../constants/constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  ImagesVariants,
  SliderCardVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

import useElementOnScreen from "../../hooks/useElementOnScreen";

const Home = () => {
  const { element, isView } = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [advantegesScrollX, setAdvantegesScrollX] = useState(0);
  const [advantegesScrollLeft, setAdvantegesScrollLeft] = useState(0);

  const advanteges = useRef(null);

  const handleAdvantegesMouseMove = (e) => {
    if (e.buttons === 1) {
      const element = e.pageX - advanteges.current.offsetLeft;
      const scrolling = (element - advantegesScrollX) * 2;
      advanteges.current.scrollLeft = advantegesScrollLeft - scrolling;
    }
  };

  const handleAdvantegesMouseDown = (e) => {
    setAdvantegesScrollX(e.pageX - advanteges.current.offsetLeft);
    setAdvantegesScrollLeft(advanteges.current.scrollLeft);
  };

  return (
    <>
      <div className="topic">
        <div className="container">
          <div className="info">
            <Text className="likes">Buy likes followers views</Text>
            <Text className="naizop">NAIZOP</Text>
            <Text className="description" variant={TextVariants.h1}>
              is the <Text>most reliable</Text> panel on the market with{" "}
              <Text>529.122</Text> orders until now
            </Text>
            <Button
              size={ButtonSizeVariants.extra_large}
              variant={ButtonVariants.crypto}
              text="Get started now"
              iconPosition="right"
              icon={IconsVariants.Arrow_crypto}
            />
          </div>
          <div className="images">
            <div className="like-img">
              <img src={ImagesVariants.Like_girl} alt="" />
            </div>
          </div>
        </div>
        <div className="light-img" />
      </div>
      <div className="container">
        <div className="sociale-network-background" />
      </div>
      <div
        ref={advanteges}
        onMouseDown={(e) => {
          handleAdvantegesMouseDown(e);
        }}
        onMouseMove={(e) => {
          handleAdvantegesMouseMove(e);
        }}
        className="advantages-container"
      >
        {AdvantagesInfo.map((item, index) => (
          <AdvantagesCard key={index} item={item} />
        ))}
      </div>
      <div className="container">
        <SocialeNetworks />
      </div>
      <Slider
        variant={SliderCardVariants.large}
        slides={ExperienceSliderInfo}
        description="Experience The Naizop Difference"
      />
      <div
        className="container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className=" experience-container">
          <div className={`experience-images ${isView ? "active" : ""}`}>
            <img
              ref={element}
              src={ImagesVariants.Experience}
              alt="Experience"
            />
            <img src={ImagesVariants.Excellence} alt="Excellence" />
          </div>
        </div>
        <div className="experience-background" />
        <div className="container experience">
          <div className="info">
            <Text className="naizop">NAIZOP</Text>
            <Text className="description" variant={TextVariants.h1}>
              is the <Text>most reliable</Text> panel on the market with{" "}
              <Text>529.122</Text> orders until now
            </Text>
            <Button
              size={ButtonSizeVariants.extra_large}
              variant={ButtonVariants.crypto}
              text="Get started now"
              iconPosition="right"
              icon={IconsVariants.Arrow_crypto}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
