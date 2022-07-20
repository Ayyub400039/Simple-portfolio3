import React from "react";
import Modal from "../Component/Modal";

class Home extends React.Component {
  render() {
    // Image homepage
    let imgs = [
      "https://firebasestorage.googleapis.com/v0/b/yunyun-e2d4f.appspot.com/o/E03c0IOUUAY7gm-.jpg?alt=media&token=0af7590e-9235-4ae3-ba8c-c1a74dada27d",
    ];

    return (
      <div className="hero min-h-[73vh] bg-base-300">
        <div className="hero-content box-border flex-col lg:flex-row">
          {/* HomePage Image */}
          <img
            src={imgs}
            alt=""
            className="dek:max-w-[260px] mobile:max-w-[170px] rounded-lg"
          ></img>
          <div>
            {/* Home Page Text */}
            <h1 className="text-4xl font-bold">Lorem Ipsum</h1>
            <p className="py-6 overflow-y-auto max-h-[15em] my-5">
              Morbi natoque nostra pretium sem ultricies ipsum dictumst
              pellentesque? Malesuada feugiat quam lobortis fringilla. A turpis
              ut netus penatibus platea accumsan imperdiet elementum metus nibh
              taciti. Aliquam sapien vehicula vestibulum fringilla himenaeos
              iaculis penatibus nisi proin magnis duis ultricies.
            </p>
            <label htmlFor="my-modal-4" className="btn modal-button">
              About
            </label>

            {/* Modal Popup Menu */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <Modal
              titles="Hai! this is Text"
              info1="fueled by coffee"
              info2="Based In The Indonesia"
              info3="Technical Support in School"
              info4="emailsample@gmail.com"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
