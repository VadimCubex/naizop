import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

import {
  ButtonSizeVariants,
  ButtonVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { debounce } from "../../helpers/helpers";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Text } from "../Text";

export const SliderReviewsComponent = ({ title, slides }) => {
  const parentContainer = useRef(null);
  const parentCards = useRef(null);
  const sliderCards = useRef([]);
  const [selected, setSelected] = useState(0);

  const handleClick = (toItem) => {
    setSelected(Math.max(0, Math.min(slides.length - 1, toItem)));
  };

  useEffect(() => {
    const ChangeSize = debounce(() => {
      sliderCards.current.forEach((item) => {
        item.style.width = `${parentContainer.current.offsetWidth}px`;
      });
    }, 500);
    ChangeSize();

    window.addEventListener("resize", ChangeSize, true);

    return () => {
      window.removeEventListener("resize", ChangeSize, true);
    };
  }, []);

  useLayoutEffect(() => {
    parentCards.current.style.left = `-${sliderCards.current[selected].offsetLeft}px`;
  }, [selected]);

  return (
    <div ref={parentContainer} className="slider-container">
      <Text variant={TextVariants.h1}>{title}</Text>
      <div ref={parentCards} className="slides-container">
        {slides.map((item, index) => (
          <div
            ref={(element) => (sliderCards.current[index] = element)}
            key={index}
            className="card"
          >
            <div className="person">
              <Avatar src={item.avatar} />
              <Text variant={TextVariants.h1}>{item.username}</Text>
              <div className="stars">
                {[...Array(item.stars)].map((item, index) => (
                  <div key={index}></div>
                ))}
              </div>
            </div>
            <div className="separator"></div>
            <div className="info">
              <Text variant={TextVariants.h3_regular}>{item.description}</Text>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-tools">
        <Button
          onClick={() => {
            handleClick(selected - 1);
          }}
          variant={ButtonVariants.purchase}
          size={ButtonSizeVariants.extra_large}
          icon={IconsVariants.Arrow_left}
        />
        <div className="sticks-container">
          {slides.map((item, index) => (
            <hr
              key={index}
              className={`${index === selected ? " active" : ""}`}
            />
          ))}
        </div>
        <Button
          onClick={() => {
            handleClick(selected + 1);
          }}
          variant={ButtonVariants.purchase}
          size={ButtonSizeVariants.extra_large}
          icon={IconsVariants.Arrow_right}
        />
      </div>
    </div>
  );
};

SliderReviewsComponent.displayName = "SliderReviews";
