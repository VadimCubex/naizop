import {
  IconsVariants,
  TextVariants,
} from "../../../constants/VariantsOfComponents";
import { ModalPortal } from "../../Portal";
import { SvgIcon } from "../../SvgIcon";
import { Text } from "../../Text";

export const ModalRanksComponent = ({ isOpen, onClick, children }) => {
  return (
    <>
      {isOpen && (
        <ModalPortal>
          <div
            className="modal"
            onScroll={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-container">
              <div className="header-modal">
                <Text variant={TextVariants.h1}>Ranks</Text>
                <SvgIcon
                  src={IconsVariants.Close}
                  size={20}
                  onClick={onClick}
                />
              </div>
              <div className="modal-background" />
              <div className="modal-content">{children}</div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

ModalRanksComponent.displayName = "ModalRanks";
