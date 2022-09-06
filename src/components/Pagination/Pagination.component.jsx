import React from "react";
import { useEffect } from "react";
import classNames from "classnames";

import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

import { DOTS, usePagination } from "../../hooks/usePagination";

export const PaginationComponent = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const PaginationClass = classNames("pagination", className);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={PaginationClass}>
      <li
        className={classNames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <SvgIcon
          src={IconsVariants.Arrow_stroke_left}
          size={20}
          color={ColorSvgVariants.white}
        />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classNames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <Text variant={TextVariants.h3}>{pageNumber}</Text>
          </li>
        );
      })}
      <li
        className={classNames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <SvgIcon
          src={IconsVariants.Arrow_stroke_left}
          size={20}
          color={ColorSvgVariants.white}
          rotate="180"
        />
      </li>
    </ul>
  );
};

PaginationComponent.displayName = "Pagination";
