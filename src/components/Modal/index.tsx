import React from "react";
import { CrossIcon } from "components/SvgIcons";
import { Button } from "components/Button";
interface PageProps {
  title?: string;
  buttonTitle?: string;
  show: boolean;
  closeModal: () => void;
  onClick: () => void;
  children: React.ReactNode;
  backdrop?: boolean;
  customFooter?: boolean;
  modalWidth?: string;
}
const Modal = ({
  title,
  buttonTitle,
  closeModal,
  onClick,
  children,
  show,
  backdrop = true,
  customFooter = false,
  modalWidth,
}: PageProps) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{
        display: show ? "block" : "none",
      }}
    >
      {backdrop && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          //   onClick={closeModal}
        ></div>
      )}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className={`relative transform p-5 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ${
              modalWidth ? `max-w-[${modalWidth}]` : "sm:max-w-lg"
            }`}
          >
            <div className="grid grid-cols-12">
              <div className="col-start-1 col-span-9">
                <div className="inline-flex text-[22px] font-bold">{title}</div>
              </div>
              <div className="col-start-10 col-span-3 text-right">
                <span className="cursor-pointer" onClick={closeModal}>
                  <CrossIcon />
                </span>
              </div>
            </div>
            {children}
            {!customFooter && (
              <Button fullWidth onClick={onClick} title={buttonTitle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
