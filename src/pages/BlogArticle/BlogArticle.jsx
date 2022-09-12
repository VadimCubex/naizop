import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { BlogCard } from "../../components/Cards";
import { CardSelect } from "../../components/CardSelect";
import { Text } from "../../components/Text";
import { Shares } from "./constants";
import {
  BlogCardSize,
  ButtonSizeVariants,
  ButtonVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const BlogArticle = ({ container = true, className }) => {
  const BlogClass = classNames(
    "blog-article",
    { container: container },
    className
  );
  const [activeShares, setActiveShares] = useState({});
  const [category] = useState(JSON.parse(localStorage.getItem("blogCategory")));
  const [article] = useState(JSON.parse(localStorage.getItem("blogArticle")));
  const [index] = useState(
    category.blogs.findIndex((element) => element.title === article.title)
  );

  const handleClickShares = (item) => {
    setActiveShares(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={BlogClass}>
        <Text className="links" variant={TextVariants.h4}>
          <Link to={container ? "/blog" : "/profile/blog"}>
            <Text>Blog -</Text>
          </Link>{" "}
          <Link to={container ? "/blog/category" : "/profile/blog/category"}>
            <Text>{category.title} -</Text>
          </Link>{" "}
          Article
        </Text>
        <Text
          variant={TextVariants.h1_medium}
          className={container ? "blog-article-title" : ""}
        >
          Article
        </Text>
        <div className="blog-article-contant">
          <div className="article">
            <div className="article-image">
              <div
                className="default-img"
                style={{ backgroundImage: `url(${article.image})` }}
              ></div>
            </div>
            <div className="article-info">
              <div className="main">
                <Text variant={TextVariants.h1}>{article.title}</Text>
                {article.mainInfo.map((item, index) => (
                  <div key={index}>
                    <Text variant={TextVariants.h5_regular}>{item}</Text>
                  </div>
                ))}
              </div>
              {article.sections.map((item, index) => (
                <div key={index} className="section">
                  <Text variant={TextVariants.h2}>{item.title}</Text>
                  <Text variant={TextVariants.h5_regular}>{item.info}</Text>
                  {/* <p>{item.info}</p> */}
                </div>
              ))}
            </div>
          </div>
          <div className="side">
            <div className="blog-article-cards">
              {category.blogs[index - 1] && (
                <BlogCard
                  component="article"
                  size={BlogCardSize.small}
                  item={category.blogs[index - 1]}
                />
              )}
              {category.blogs[index + 1] && (
                <BlogCard
                  component="article"
                  size={BlogCardSize.small}
                  item={category.blogs[index + 1]}
                />
              )}
            </div>
            <div className="shares-container">
              <CardSelect
                title="Share"
                value={activeShares}
                onClick={handleClickShares}
                options={Shares}
              />
              <Button
                variant={ButtonVariants.blue}
                size={ButtonSizeVariants.medium}
                text="Share"
                width="full"
                isLight={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
