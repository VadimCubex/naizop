import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import {
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { Button } from "../../Button";
import { Text } from "../../Text";

export const BlogCardComponent = ({ component, size, item, className }) => {
  const BlogCardClass = classNames(
    "blog-card",
    { [`size-${size}`]: size },
    className
  );
  const navigate = useNavigate();

  const regirectUrl = () => {
    switch (component) {
      case "article":
        location.reload();
        return "";
      case "blog":
        return "/category/article";
      case "category":
        return "/article";
      default:
        break;
    }
  };

  const handleClick = () => {
    localStorage.setItem("blogArticle", JSON.stringify(item));
    navigate(location.pathname + regirectUrl());
  };

  return (
    <div className={BlogCardClass}>
      <div className="card-img-container">
        <div
          className="default-img"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      </div>
      <div className="card-info">
        <div>
          <Text variant={TextVariants.h2}>{item.title}</Text>
          <Text variant={TextVariants.h5_regular}>{item.introduction}</Text>
        </div>
        <Button
          onClick={handleClick}
          isLight={true}
          variant={ButtonVariants.yellow}
          size={ButtonSizeVariants.large}
          text="Read more"
        />
      </div>
    </div>
  );
};

BlogCardComponent.displayName = "BlogCard";
