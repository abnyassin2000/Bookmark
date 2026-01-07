import React, { useState } from "react";
import "./features.css";
import sliderOne from "../../images/illustration-features-tab-1.svg";
import sliderTwo from "../../images/illustration-features-tab-2.svg";
import sliderThree from "../../images/illustration-features-tab-3.svg";
function Features() {
    const [isActive,setIsActive] = useState(0)
  return (
    <div className="featur">
      <div className="container">
        <div className="text">
          <h1>Features</h1>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="tabs-wrapper">
          <div className="tabs">
            <span className={`tab ${isActive === 0 ? "active" : ""}`} onClick={()=>{
                setIsActive(0)
            }}>Simple Bookmarking</span>
            <span className={`tab ${isActive === 1? "active" : ""}`} onClick={()=>setIsActive(1)}>Speedy Searching</span>
            <span className={`tab ${isActive === 2? "active" : ""}`} onClick={()=>setIsActive(2)}>Easy Sharing</span>
          </div>
        </div>
        <div className={`simplebook slide ${isActive === 0 ? "active" : ""}`}>
          <div className="colone">
            <div className="img">
              <img src={sliderOne} alt="" />
            </div>
          </div>
          <div className="coltwo">
            <div className="title">
              <h1>Bookmark in one click</h1>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="">More Info</button>
            </div>
          </div>
        </div>
        <div className={`slide ${isActive === 1 ? "active" : ""}`}>
          <div className="colone">
            <div className="img">
              <img src={sliderTwo} alt="" />
            </div>
          </div>
          <div className="coltwo">
            <div className="title">
              <h1>Intelligent search</h1>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="">More Info</button>
            </div>
          </div>
        </div>
        <div className={`slide ${isActive === 2 ? "active" : ""}`}>
          <div className="colone">
            <div className="img">
              <img src={sliderThree} alt="" />
            </div>
          </div>
          <div className="coltwo">
            <div className="title">
              <h1>Share your bookmarks</h1>
              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
