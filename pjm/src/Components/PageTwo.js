import React from "react";
import "./PageTwo.css";

const PageTwo = ({onButtonClick}) => {
    return (
      <main
        className="pt5 black-80 center"
        style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
      >
        <form className="measure">
          <h2>Let's set up a home for all your work</h2>
          <p style={{ color: "#C0C0C0" }}>
            You can always create another workspace later.
          </p>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label
                className="left db lh-copy f6 mb1"
                htmlFor="Street"
                style={{textAlign: 'left'}}
              >
                Street
              </label>
              <input
                className="f6 br2 ph3 pv2 mb2 dib black w-100"
                type="text"
                name="Street"
                id="Street"
                size="30"
                placeholder="Eden"
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
              htmlFor="city"
              style={{ textAlign: "left" }}
            >
              City
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="city"
              id="city"
              placeholder="Enter your Company Id"
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
              htmlFor="State"
              style={{ textAlign: "left" }}
            >
              State
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="state"
              id="state"
              placeholder="Enter your Company Id"
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
              htmlFor="zip-code"
              style={{ textAlign: "left" }}
            >
              Zip Code
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="zip-code"
              id="zip-code"
              placeholder="Enter your Company Id"
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
              htmlFor="country"
              style={{ textAlign: "left" }}
            >
              Country
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="country"
              id="country"
              placeholder="Enter your Company Id"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          </fieldset>
          <div className="">
            <input
              className="f6 grow br2 ph3 pv2 mb2 dib white"
              style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
              type="submit"
              value="Create Workspace"
              onClick={() => onButtonClick("pagethree")}
            />
          </div>
        </form>
      </main>
    );
}

export default PageTwo;