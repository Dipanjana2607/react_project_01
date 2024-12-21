const HeroSec = () => {
  return (
    <main className="hero">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="last">
          <div className="buttons">
            <button>ShopNow</button>
            <button>Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand_icons">
              <img src="public/images/flipkart.png" alt="amazon-logo" />
              <img src="public/images/amazon.png  " alt="flipkart-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero_pic">
        <img src="public/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};
export default HeroSec;
