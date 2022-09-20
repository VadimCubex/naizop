import { createPortal } from "react-dom";

export const CurrencyPortalComponent = ({ children }) =>
  createPortal(children, document.getElementById("currency-portal"));

CurrencyPortalComponent.displayName = "CurrencyPortal";
