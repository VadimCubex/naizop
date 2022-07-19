import { createPortal } from "react-dom";

export const ModalPortalComponent = ({ children }) =>
  createPortal(children, document.getElementById("modal-portal"));

ModalPortalComponent.displayName = "ModalPortal";
