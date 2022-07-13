import React from "react";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  ImagesVariants,
  SliderCardVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import {
  AdvantagesInfo,
  ExperienceSliderInfo,
} from "../../constants/constants";
import { AdvantagesCard } from "../../components/Cards";
import { SocialeNetworks } from "../../components/SocialeNetworks";
import { Slider } from "../../components/Slider";
import { useState } from "react";
import { useRef } from "react";

const Home = () => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const advanteges = useRef(null);

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      const element = e.pageX - advanteges.current.offsetLeft;
      const scrolling = (element - scrollX) * 2;
      advanteges.current.scrollLeft = scrollLeft - scrolling;
    }
  };

  const handleMouseDown = (e) => {
    setScrollX(e.pageX - advanteges.current.offsetLeft);
    setScrollLeft(advanteges.current.scrollLeft);
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
      <div className="container main-content">
        <div className="sociale-network-background" />
      </div>
      <div
        ref={advanteges}
        onMouseDown={(e) => {
          handleMouseDown(e);
        }}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
        className="advantages-container"
      >
        {AdvantagesInfo.map((item, index) => (
          <AdvantagesCard key={index} item={item} />
        ))}
      </div>
      <div className="container main-content">
        <SocialeNetworks />
      </div>
      <Slider
        variant={SliderCardVariants.large}
        slides={ExperienceSliderInfo}
        description="Experience The Naizop Difference"
      />
      <div className="container experience-container">
        <div className="experience-images">
          <img src={ImagesVariants.Experience} alt="" />
          <img src={ImagesVariants.Experience} alt="" />
        </div>
        <div className="experience-background" />
        <div className="experience">
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
