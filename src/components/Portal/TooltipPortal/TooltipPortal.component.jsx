import { createPortal } from "react-dom";

export const TooltipPortalComponent = ({ children }) =>
  createPortal(children, document.getElementById("tooltip-portal"));

TooltipPortalComponent.displayName = "TooltipPortal";
