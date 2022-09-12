import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames";

import { SvgIcon } from "../../components/SvgIcon";
import { Text } from "../../components/Text";
import {
  ColorSvgVariants,
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { debounce } from "../../helpers/helpers";

const Download = () => {
  const DownloadClass = classNames("download-page", "background-img");
  const [sizeSvg, setSizeSvg] = useState(94);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ResizeSvg = () => {
      if (window.innerWidth >= 1025) {
        setSizeSvg(94);
      }
      if (window.innerWidth < 1025 && window.innerWidth >= 426) {
        setSizeSvg(75);
      }
      if (window.innerWidth < 426) {
        setSizeSvg(56);
      }
    };

    ResizeSvg();
    const UpdateSize = debounce(ResizeSvg, 500);

    window.addEventListener("resize", UpdateSize, true);

    return () => {
      window.removeEventListener("resize", UpdateSize, true);
    };
  }, []);

  return (
    <>
      <div className={DownloadClass}>
        <div className="naizop">
          <div className="logo">
            <SvgIcon
              className="left"
              src={IconsVariants.LogoLeft}
              size={sizeSvg}
              color={ColorSvgVariants.white}
            />
            <SvgIcon
              className="right"
              src={IconsVariants.LogoRight}
              size={sizeSvg}
              color={ColorSvgVariants.white}
            />
          </div>
          <Text variant={TextVariants.h1}>Naizop</Text>
        </div>
        <div className="info">
          <Text variant={TextVariants.h1}>Experience Excellence</Text>
          <Text variant={TextVariants.h1}>Experience Naizop</Text>
        </div>
      </div>
    </>
  );
};

export default Download;
