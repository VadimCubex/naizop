import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { debounce } from "../../helpers/helpers";

export const DropDownComponent = ({
  isOpen,
  variant,
  children,
  addToHeight,
  isInnerHeight,
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

  useEffect(() => {
    const updateSize = () => {
      const add = addToHeight ? addToHeight : 190;
      dropDown.current?.offsetHeight &&
        setHeight(
          isInnerHeight
            ? window.innerHeight - 64
            : dropDown.current.offsetHeight + add
        );
    };
    updateSize();

    window.addEventListener("resize", debounce(updateSize, 500), true);

    return () => {
      window.removeEventListener("resize", debounce(updateSize, 500), true);
    };
  }, []);

  return (
    <div
      style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      className={DropDownClass}
    >
      <div ref={dropDown} className={DropDownChildrenClass}>
        {children}
      </div>
    </div>
  );
};

DropDownComponent.displayName = "DropDown";
