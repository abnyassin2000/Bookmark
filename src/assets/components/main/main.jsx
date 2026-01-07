import img from "../../images/illustration-hero.svg"
import "./main.css"
export default function Main() {
  return (
    <div className="container">
      <div className="grid">
        <div className="col-one">
          <div className="text">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="btns">
                <button className="blue">Get it on Chrome</button>
                <button className="gray">Get it on Firefox</button>
            </div>
          </div>
        </div>
        <div className="col-two">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
