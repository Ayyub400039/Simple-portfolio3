import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import {
  MdOutlinePersonPinCircle,
  MdWork,
  MdContactMail,
} from "react-icons/md";

const Modal = ({ titles, info1, info2, info3, info4 }) => (
  <>
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <h3 className="text-lg font-bold">{titles}</h3>
        <div className="py-4 space-y-2">
          <div className="flex items-center">
            <span className="pr-2">
              <GiCoffeeCup />
            </span>
            <span>{info1}</span>
          </div>
          <div className="flex items-center">
            <span className="pr-2">
              <MdOutlinePersonPinCircle />
            </span>
            <span>{info2}</span>
          </div>
          <div className="flex items-center">
            <span className="pr-2">
              <MdWork />
            </span>
            <span>{info3}</span>
          </div>
          <div className="flex items-center">
            <span className="pr-2">
              <MdContactMail />
            </span>
            <span>{info4}</span>
          </div>
        </div>
      </label>
    </label>
  </>
);

export default Modal;
