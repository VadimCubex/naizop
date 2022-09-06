import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const BlogCategoryComponent = ({ item, className }) => {
  const BlogCategoryClass = classNames("blog-category", className);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("blogCategory", JSON.stringify(item));
    navigate(location.pathname + "/category");
  };

  return (
    <div className={BlogCategoryClass}>
      <div>
        <img src={item.icon} alt="category" />
        <Text variant={TextVariants.h1}>{item.title}</Text>
      </div>
      <SvgIcon
        className="arrow"
        src={IconsVariants.Arrow_stroke_left}
        rotate="180"
        size={20}
        onClick={handleClick}
        color={ColorSvgVariants.white}
      />
    </div>
  );
};

BlogCategoryComponent.displayName = "BlogCategory";
