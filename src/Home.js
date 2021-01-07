import React from "react";
import "./Home.css";
import Product from "./Product";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => slider(0), []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__slider-container">
          <div className="home__slide">
            <img
              className="home__image "
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg"
              alt="image1"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
              alt="image2"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
              alt="image3"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
              alt="image4"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
              alt="image5"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
              alt="image6"
            />
          </div>
        </div>

        <div className="home__row">
          <Product
            id="12321"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={22052.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="12322"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={7276.99}
            rating={4}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="12323"
            title="
                    Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={84687.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81mxun+6pEL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12324"
            title="RUNMUS Stereo Gaming Headset"
            price={5218.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX679_.jpg"
          />
          <Product
            id="12325"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI 
                    Upto 250 hours of battery life"
            price={14701.17}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY741_.jpg"
          />
          <Product
            id="12326"
            title="Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM) 
                     
                    "
            price={13304.49}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/814poe%2BIDsL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12327"
            title="boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Raging Red, On the Ear)"
            price={2940.38}
            rating={1}
            image="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
          />
          <Product
            id="12328"
            title="AMD Ryzen 5 3600X 6-Core, 12-Thread Unlocked Desktop Processor "
            price={16098.59}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg"
          />
          <Product
            id="12329"
            title="Samsung Gear S3 Frontier Smartwatch (Bluetooth)"
            price={29330.31}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg
"
          />
        </div>
        <div className="home__row">
          <Product
            id="12330"
            title="USB 3.0 Universal Laptop Docking Station, Acodot Dual Monitor Dock Support Windows Equipped with Dual HDMI and DVI/VGA, Gigabit Ethernet, Audio, 6 USB Ports 
            "
            price={2940.38}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/616Vux27VAL._AC_SL1500_.jpg
            "
          />
          <Product
            id="12331"
            title="Digital alarm clock with a 0.7-inch green LED display for easily checking the time at a glance
            "
            price={16098.59}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
          />
          <Product
            id="12331"
            title="Dash Mini Maker: The Mini Waffle Maker Machine for Individual Waffles, Paninis, Hash browns, & other on the go Breakfast, Lunch, or Snacks - Red
            "
            price={29330.31}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SL1500_.jpg
"
          />
        </div>
        <div className="home__row">
          <Product
            id="12332"
            title="Instant Pot Lux 6-in-1 Electric Pressure Cooker, Sterilizer Slow Cooker, Rice Cooker, Steamer, Saute, and Warmer"
            price={2940.38}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61IzKouqj1L._AC_SL1500_.jpg
            "
          />
          <Product
            id="12333"
            title="Crayola Colored Pencils, Long, 23-Pack, Multicolor 
            COLORED PENCIL SET: Includes 36 Crayola Colored Pencils "
            price={661.59}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81Vje4dOoKL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

function slider(counter) {
  const slides = document.querySelectorAll(".home__image");

  slides.forEach((slide, index) => {
    if (index !== counter) {
      slide.style.visibility = `hidden`;
      slide.classList.add(`image-${index}`);
    }
  });
  moveCorousal(counter, slides, slides.length);
}

function moveCorousal(counter, slides, len) {
  if (slides) {
    if (counter >= len - 1) counter = 0;
    else counter += 1;

    slides.forEach((slide, index) => {
      if (index === counter) {
        slide.style.visibility = `visible`;
      } else {
        slide.style.visibility = `hidden`;
      }
    });
  }
  setTimeout(() => {
    moveCorousal(counter, slides, len);
  }, 5000);
}

export default Home;
