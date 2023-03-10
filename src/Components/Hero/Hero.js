import "./Hero.css";
import LUCY from "../../Assets/LUCY.jpg";

const Hero = () => {
  return (
    <div id="hero-container">
      <div className="hero">
        <div className="left">
          <img src={LUCY} alt="Juice Wrld" />
        </div>
        <div className="right">
          <h6>Lucifer Morningstar</h6>
          <h1>
            I'm a Creative
            <br />
            <span>Devil</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
