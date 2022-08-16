import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

import { TextVariants } from "../../constants/VariantsOfComponents";
import { debounce } from "../../helpers/helpers";
import { Avatar } from "../Avatar";
import { Text } from "../Text";

export const SliderOrderComponent = ({ slides }) => {
  const parentContainer = useRef(null);
  const parentCards = useRef(null);
  const sliderCards = useRef([]);
  const [selected, setSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(slides[0]);

  useEffect(() => {
    const ChangeSize = debounce(() => {
      sliderCards.current.forEach((item) => {
        item.style.width = `${parentContainer.current.offsetWidth}px`;
      });
    }, 500);
    ChangeSize();

    let active = 0;
    const timer = setInterval(() => {
      if (active !== slides.length - 1) {
        active++;
        setSelected(active);
        setSelectedItem(slides[active]);
      } else {
        active = 0;
        setSelected(0);
        setSelectedItem(slides[0]);
      }
    }, 7500);

    window.addEventListener("resize", ChangeSize, true);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", ChangeSize, true);
    };
  }, []);

  useLayoutEffect(() => {
    parentCards.current.style.left = `-${sliderCards.current[selected].offsetLeft}px`;
  }, [selected]);

  return (
    <div ref={parentContainer} className="slider-order">
      <div className="avatars">
        {slides.map((item, index) => (
          <Avatar
            className={item === selectedItem && "avatar-active"}
            key={index}
            src={item.avatar}
            isLight={item === selectedItem}
          />
        ))}
      </div>
      <div className="person-info">
        <Text variant={TextVariants.h1}>{selectedItem.username}</Text>
        <div className="stars">
          {[...Array(selectedItem.stars)].map((item, index) => (
            <Text variant={TextVariants.h1} key={index}>
              ★
            </Text>
          ))}
        </div>
      </div>

      <div className="separator"></div>
      <div ref={parentCards} className="slides">
        {slides.map((item, index) => (
          <div
            ref={(element) => (sliderCards.current[index] = element)}
            key={index}
            className="description"
          >
            <Text variant={TextVariants.h1_medium}>{item.description}</Text>
          </div>
        ))}
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

SliderOrderComponent.displayName = "SliderOrder";
