import classNames from "classnames";

import {
  IconsVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { ModalPortal } from "../Portal";
import { SvgIcon } from "../SvgIcon";
import { Text } from "../Text";

export const ModalComponent = ({
  title,
  isOpen,
  onClick,
  children,
  className,
}) => {
  const ModalClass = classNames("modal", { active: isOpen }, className);

  return (
    <>
      <ModalPortal>
        <div
          className={ModalClass}
          onScroll={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-container">
            <div className="header-modal">
              <Text variant={TextVariants.h1}>{title}</Text>
              <SvgIcon src={IconsVariants.Close} size={20} onClick={onClick} />
            </div>
            <div className="modal-background" />
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </ModalPortal>
    </>
  );
};

ModalComponent.displayName = "ModalRanks";
