import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { debounce } from "../../helpers/helpers";

export const DropDownComponent = ({
  isOpen,
  variant,
  children,
  addToHeight,
  isInnerHeight,
  maxHeight,
  className,
}) => {
  const DropDownClass = classNames(
    "dropDown",
    {
      [`dropDown_variant_${variant}`]: variant,
      "dropDown-active": isOpen,
    },
    className
  );

  const DropDownChildrenClass = classNames("children", {
    [`children_variant_${variant}`]: variant,
  });

  const [height, setHeight] = useState(0);
  const dropDown = useRef(null);

  const selectHeight = () => {
    if (isOpen) {
      if (maxHeight) {
        return maxHeight;
      } else {
        return height;
      }
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const updateSize = () => {
      const add = addToHeight ? addToHeight : 190;
      setHeight(
        isInnerHeight
          ? window.innerHeight - 64
          : dropDown.current.offsetHeight + add
      );
    };
    updateSize();
    const DropDownUpdateSize = debounce(updateSize, 500);

    window.addEventListener("resize", DropDownUpdateSize, true);

    return () => {
      window.removeEventListener("resize", DropDownUpdateSize, true);
    };
  }, []);

  return (
    <div style={{ maxHeight: `${selectHeight()}px` }} className={DropDownClass}>
      <div ref={dropDown} className={DropDownChildrenClass}>
        {children}
      </div>
    </div>
  );
};

DropDownComponent.displayName = "DropDown";
