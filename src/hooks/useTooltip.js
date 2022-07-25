import { useEffect, useState, useRef, useMemo } from "react";

import { debounce } from "../helpers/helpers";

const useTooltip = (tooltip = true) => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [coords, setCoords] = useState({});
  const [tooltipPosition, setTooltipPosition] = useState("left");
  const tooltipSvg = useRef(null);
  let timeout;

  const setTooltipWidth = useMemo(() => {
    if (window.innerWidth > 1440) {
      return 400;
    }
    if (window.innerWidth < 1440 && window.innerWidth >= 1025) {
      return 365;
    }
    if (window.innerWidth < 1025 && window.innerWidth >= 835) {
      return 330;
    }
    if (window.innerWidth < 835 && window.innerWidth >= 426) {
      return 295;
    }
    if (window.innerWidth < 426 && window.innerWidth >= 351) {
      return 260;
    }
    if (window.innerWidth < 351) {
      return 225;
    }
  }, [window.innerWidth]);

  const CalcCoords = () => {
    const rect =
      tooltipSvg.current?.getBoundingClientRect() &&
      tooltipSvg.current.getBoundingClientRect();
    if (rect) {
      setCoords({
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY + rect.height / 2,
      });
      DetermineTooltipPosition(rect.x + rect.width / 2 + setTooltipWidth);
    }
  };

  const DetermineTooltipPosition = (right) => {
    if (right > window.innerWidth) {
      setTooltipPosition("right");
    }
  };

  const handleMouseEnter = () => {
    timeout = setTimeout(() => {
      setIsShowTooltip(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearInterval(timeout);
    setIsShowTooltip(false);
  };

  useEffect(() => {
    const updatePosition = () => {
      tooltip && CalcCoords();
    };
    updatePosition();

    window.addEventListener("resize", debounce(updatePosition, 500), true);

    return () => {
      window.removeEventListener("resize", debounce(updatePosition, 500), true);
    };
  }, []);

  return {
    coords,
    isShowTooltip,
    tooltipPosition,
    tooltipSvg,
    setTooltipWidth,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useTooltip;
