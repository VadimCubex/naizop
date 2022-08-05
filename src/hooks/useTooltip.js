import { useEffect, useState, useRef, useMemo } from "react";

import { debounce } from "../helpers/helpers";

const useTooltip = () => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [coords, setCoords] = useState({});
  const [tooltipPosition, setTooltipPosition] = useState("left");
  const tooltipSvg = useRef(null);
  let timeout;

  const TooltipWidth = useMemo(() => {
    if (window.innerWidth >= 1440) {
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

  const handleClick = (event) => {
    setIsShowTooltip(!isShowTooltip);
    event.stopPropagation();
  };

  useEffect(() => {
    const CalcCoords = () => {
      const rect =
        tooltipSvg.current?.getBoundingClientRect() &&
        tooltipSvg.current.getBoundingClientRect();
      if (rect) {
        setCoords({
          left: rect.x + rect.width / 2,
          top: rect.y + window.scrollY + rect.height / 2,
        });
        DetermineTooltipPosition(rect.x + rect.width / 2 + TooltipWidth);
      }
    };

    CalcCoords();
    const TooltipUpdatePosition = debounce(CalcCoords, 500);

    window.addEventListener("resize", TooltipUpdatePosition, true);

    return () => {
      window.removeEventListener("resize", TooltipUpdatePosition, true);
    };
  }, []);

  return {
    coords,
    isShowTooltip,
    tooltipPosition,
    tooltipSvg,
    TooltipWidth,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};

export default useTooltip;
