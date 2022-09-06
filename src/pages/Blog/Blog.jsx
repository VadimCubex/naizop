import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

import { BlogCategory } from "../../components/BlogCategory";
import { BlogCard } from "../../components/Cards";
import { Text } from "../../components/Text";
import { BlogCategories, BlogsAll } from "./constants";
import {
  BlogCardSize,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const Blog = ({ container = true, className }) => {
  const BlogClass = classNames("blog", { container: container }, className);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={BlogClass}>
        <Text
          variant={TextVariants.h1_medium}
          className={container ? "blog-title" : ""}
        >
          Blog
        </Text>
        <div className="blog-info-container">
          <BlogCard
            component="blog"
            size={BlogCardSize.big}
            item={BlogsAll[0]}
          />
          <div className="categories-container">
            {BlogCategories.map((item, index) => (
              <BlogCategory key={index} item={item} />
            ))}
          </div>
          <div className="blog-cards">
            {BlogsAll.slice(1).map((item, index) => (
              <BlogCard
                component="blog"
                size={BlogCardSize.small}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
