import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { debounce } from "../../helpers/helpers";
import { Avatar } from "../Avatar";
import { SvgIcon } from "../SvgIcon";
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
            <div className="card-contant">
              <div className="person">
                <Avatar src={item.avatar} isLight={true} />

                <div className="person-info">
                  <Text variant={TextVariants.h1}>{item.username}</Text>
                  <div className="stars">
                    {[...Array(item.stars)].map((item, index) => (
                      <Text variant={TextVariants.h1} key={index}>
                        ★
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
              <div className="separator"></div>
              <div className="info">
                <Text variant={TextVariants.h3_regular}>
                  {item.description}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-tools">
        <div
          onClick={() => {
            handleClick(selected - 1);
          }}
          className="arrow"
        >
          <SvgIcon src={IconsVariants.Arrow_stroke_left} size={42} />
        </div>
        <div className="sticks-container">
          {slides.map((item, index) => (
            <hr
              key={index}
              className={`${index === selected ? " active" : ""}`}
            />
          ))}
        </div>
        <div
          onClick={() => {
            handleClick(selected + 1);
          }}
          className="arrow"
        >
          <SvgIcon
            src={IconsVariants.Arrow_stroke_left}
            size={42}
            rotate="180"
          />
        </div>
      </div>
      <div className="sticks-container">
        {slides.map((item, index) => (
          <hr
            key={index}
            className={`${index === selected ? " active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

SliderReviewsComponent.displayName = "SliderReviews";
