import React from "react";
import "./PageOne.css";

const PageOne = ({ onButtonClick}) => {

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <form className="measure">
        <h2>Welcome! First things first...</h2>
        <p style={{ color: "#C0C0C0" }}>You can always change them later.</p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Full Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="Enter your name"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="company-name"
              style={{ textAlign: "left" }}
            >
              Company Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="company-name"
              id="company-name"
              placeholder="Enter your Company Name"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="Id-name"
              style={{ textAlign: "left" }}
            >
              Company Id No
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="Id-name"
              id="Id-name"
              placeholder="Enter your Company Id"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="mv3">
              <label className="db lh-copy f6 mb1" htmlFor="website" style={{textAlign: 'left'}}>
                Website
                <span className="ml1" style={{ color: "#C0C0C0" }}>
                  {" "}
                  (optional)
                </span>
              </label>
              <div className="center urlButton br2 mt1">
              <button class="dropbtn urlInput f6 br2 ph2 pv2">www.eden.com/</button>
              <input
                className="f6 ph3 pv2 dib br2 black w-100"
                type="url"
                name="website"
                id="website"
                placeholder="Example"
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
              />
              </div>
            </div>
        </fieldset>
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
            }}
            type="submit"
            value="Create Workspace"
            onClick={() => onButtonClick("pagetwo")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
