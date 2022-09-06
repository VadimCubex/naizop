import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { BlogCard } from "../../components/Cards";
import { Pagination } from "../../components/Pagination";
import { Text } from "../../components/Text";
import {
  BlogCardSize,
  TextVariants,
} from "../../constants/VariantsOfComponents";

const BlogCategoryPage = ({ container = true, className }) => {
  const BlogClass = classNames(
    "blog-category-page",
    { container: container },
    className
  );
  const [category] = useState(JSON.parse(localStorage.getItem("blogCategory")));
  const [currentPage, setCurrentPage] = useState(1);

  const currentBlogs = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 7;
    const lastPageIndex = firstPageIndex + 7;
    return category.blogs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
          {category.title}
        </Text>
        <Text
          variant={TextVariants.h1_medium}
          className={container ? "blog-category-page-title" : ""}
        >
          {category.title}
        </Text>
        <div className="blog-category-page-info-container">
          <BlogCard
            component="category"
            size={BlogCardSize.big}
            item={currentBlogs[0]}
          />
          <div className="blog-category-page-cards">
            {currentBlogs.slice(1).map((item, index) => (
              <BlogCard
                component="category"
                size={BlogCardSize.small}
                key={index}
                item={item}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={category.blogs.length}
            pageSize={7}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default BlogCategoryPage;
