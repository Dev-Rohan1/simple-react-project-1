import heroImage from "../assets/images/shoe_image.png";
import amazon from "../assets/images/amazon.png";
import flipcard from "../assets/images/flipkart.png";
import classes from "../assets/css/hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={`${classes.wrapper} container`}>
        <div className={classes.col}>
          <h1>
            YOUR FEET <br />
            DESERVE THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className={classes.btn}>
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <span>Also Available On</span>
          <div className={classes.shopBrand}>
            <img src={amazon} alt="image" />
            <img src={flipcard} alt="image" />
          </div>
        </div>
        <div className={classes.col}>
          <img src={heroImage} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
