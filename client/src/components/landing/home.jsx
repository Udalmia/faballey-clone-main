import { useEffect, useState } from "react";
import "./home.css";
import { Navbar } from "../Navbars/Nav/Navbar";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  const [deal, setDeal] = useState(0);
  const [recommend, setRecommend] = useState(0);

  const image = [
    "https://img.faballey.com/images/banner/6129fe44-6ead-4e7b-a0f1-d9bad7f1c7e1.jpg",
    "https://img.faballey.com/images/banner/f77b4473-c9fb-46ba-a0b7-3ff7da1d94db.jpg",
    "https://img.faballey.com/images/banner/cbc69343-4a32-4191-be35-1322d44a5c4f.jpg",
  ];

  const crushing_img = [
    "https://img.faballey.com/images/banner/52825777-5880-4bf7-a0fc-9ac14cd04510.jpg",
    "https://img.faballey.com/images/banner/7bf650b7-88a7-4705-ae21-444f4a5ef614.jpg",
    "https://img.faballey.com/images/banner/da488d86-17cf-43f3-a1f6-88f662441776.jpg",
  ];

  // const fresh_pro = [
  //   "https://img.faballey.com/images/product/DRS04862Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05722Z/1.JPG",
  //   "https://img.faballey.com/images/product/DRS04475Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05392Z/1.JPG",
  //   "https://img.faballey.com/images/product/DRS04141Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05381Z/1.JPG",
  //   "https://img.faballey.com/images/product/TOP05632Z/1.JPG",
  //   "https://img.faballey.com/Images/Product/TOP04332Z/1.jpg",
  //   "https://img.faballey.com/Images/Product/TOP04567Z/1.jpg",
  // ];

  const fresh_pro = [
    {
      url: "https://img.faballey.com/images/product/DRS04773Z/1.JPG",
      title: "Orange Strappy Tie Shoulder R...",
      newPrice: "₹2100",
    },
    {
      url: "https://img.faballey.com/images/product/DRS04559Z/1.JPG",
      title: "Navy Halter Neck Embellished ...",
      newPrice: "₹2700",
    },
    {
      url: "https://img.faballey.com/images/product/DRS04249Z/1.JPG",
      title: "Maroon Smocked Lace Detail Hi...",
      newPrice: "₹2600",
      
    },
    {
      url: "https://img.faballey.com/images/product/FCO00133Z/1.JPG",
      title: "Pink Abstract Printed Shorts ...",
      newPrice: "₹1365",
      oldPrice: "₹1950",
    },
    {
      url: "https://img.faballey.com/images/product/TOP05768Z/1.JPG",
      title: "Blue Floral Frilled Tie Up Sl...",
      newPrice: "₹1400",
      
    },
    {
      url: "https://img.faballey.com/images/product/TOP05475Z/1.JPG",
      title: "Navy Peal Embellished Flutter...",
      newPrice: "₹910",
      oldPrice: "₹1300",
    },
    {
      url: "https://img.faballey.com/images/product/TOP05476Z/1.JPG",
      title: "Wine Embellished Halter Asymm...",
      newPrice: "₹1500",
    },
   
  ];

  const dealImages = [
    "https://img.faballey.com/images/banner/59d82ea7-bedc-4f2d-89bd-b4a14f28f15c.jpg",
    "https://img.faballey.com/images/banner/3f6b1b64-eb8c-41da-b255-daa7cfd43cb1.jpg",
    "https://img.faballey.com/images/banner/7db4720f-b95a-4a19-b0d5-bd482bb6c995.jpg",
    "https://img.faballey.com/images/banner/92adc926-e59d-4f12-8525-f17319f8f9d4.jpg",
    "https://img.faballey.com/images/banner/7d85e59a-ec93-4855-bc2c-3eb0243b9654.jpg",
    "https://img.faballey.com/images/banner/9dc469ed-3905-4cd5-81e1-9cd63316c6bb.jpg",
  ];

  const spotlight_img = [
    "https://img.faballey.com/images/banner/4126a81d-35ad-4eb8-8e5b-9bd567c1a843.jpg",
    "https://img.faballey.com/images/banner/78f294c9-5603-4ca7-b1f3-956b6200307c.jpg",
    "https://img.faballey.com/images/banner/2107fb3e-dcd3-4d5d-8e7d-8c7777c4b407.jpg",
    "https://img.faballey.com/images/banner/fea5401a-03e3-4820-aacc-984b9ee7379a.jpg",
    "https://img.faballey.com/images/banner/4dcebd97-3804-4bed-bb11-a859dcad9128.jpg",
    "https://img.faballey.com/images/banner/21ba97a2-d888-420f-8536-3aa1cde0f6d4.jpg",
  ];

  const recommended_image = [
    {
      url: "https://img.faballey.com/Images/Product/TOP04567Z/1.jpg",
      title: "Pastel Blue Embroidered Cami Top",
      newPrice: "₹700",
      oldPrice: "₹1400",
    },
    {
      url: "https://img.faballey.com/Images/Product/TOP04519Z/1.jpg",
      title: "Grey Embellished Cowl Neck Top",
      newPrice: "₹800",
      oldPrice: "₹1600",
    },
    {
      url: "https://img.faballey.com/Images/Product/TOP04332Z/1.jpg",
      title: "Navy Embellished Neck Flared Sleeve Top",
      newPrice: "₹825",
      oldPrice: "₹1650",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03351Z/1.jpg",
      title: "Grey Floral Ruffled Strappy Midi Dress",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03291Z/1.jpg",
      title: "Sienna Striped Strappy Jumpsuit",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03285Z/1.jpg",
      title: "Pink Floral Ruffled Strappy Maxi Dress",
      newPrice: "₹1250",
      oldPrice: "₹2500",
    },

    {
      url: "https://img.faballey.com/Images/Product/DRS03143Z/1.jpg",
      title: "Navy V Neck Wrap Dress",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },

    {
      url: "https://img.faballey.com/Images/Product/DRS03132Z/1.jpg",
      title: "Teal Cut Out Back Maxi Dress",
      newPrice: "₹1100",
      oldPrice: "₹2200",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03087Z/1.jpg",
      title: "Wine Sleeveless Embellished Maxi Dress",
      newPrice: "₹1300",
      oldPrice: "₹2600",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS03038Z/1.jpg",
      title: "Rose Halter Neck Pleated Maxi Dress",
      newPrice: "₹1475",
      oldPrice: "₹2950",
    },
    {
      url: "https://img.faballey.com/Images/Product/DRS02935Z/1.jpg",
      title: "Pink Stripe Belted Shirt Dress",
      newPrice: "₹660",
      oldPrice: "₹2200",
    },
  ];


  

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {};
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => prevIndex === prevIndex + 1);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => prevIndex === prevIndex - 1);
  };

  const bottomSlideRight = () => {
    setNewIndex((pre) => (pre = pre + 1));
  };

  const bottomSlideLeft = () => {
    setNewIndex((pre) => (pre = pre - 1));
  };

  // for moving deals seaction

  const dealNext = () => {
    setDeal((pre) => (pre = pre + 1));
  };

  const dealPrev = () => {
    setDeal((pre) => (pre = pre - 1));
  };

  // form moving recommended section

  const recommendeNext = () => {
    setRecommend((pre) => (pre = pre + 1));
  };

  const recommendPrevious = () => {
    setRecommend((pre) => (pre = pre - 1));
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="flex text-xs font-semibold text-center w-full">
          <div className="flex-1 py-2 bg-red-50">Spring Summer'22</div>
          <div className="flex-1 py-2 bg-red-200">SALE | FLAT 50%-70% Off</div>
          <div className="flex-1 py-1 bg-red-50">
           Back To Work
          </div>
        </div>

        <div className="my-2 mx-auto overflow-hidden w-full relative ">
          <div
            className="whitespace-nowrap transition ease-linear duration-1000"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {image.map((e, i) => (
              <img className="w-full inline-block" src={e} key={i} alt="img" />
            ))}
          </div>

          <div className="slideshowDots text-center absolute bottom-0 left-1/2 ">
            {image.map((_, id) => (
              <div
                key={id}
                className={index === id ? "slideshowDotActive" : "slideshowDot"}
                onClick={() => {
                  setIndex(id);
                }}
              ></div>
            ))}
          </div>

          <div
            onClick={nextSlide}
            className={
              index === image.length - 1
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪢
          </div>

          <div
            onClick={prevSlide}
            className={
              index === 0
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪡
          </div>
        </div>

        <div>
          <img
            src="https://img.faballey.com/images/banner/e4e8f5f6-e1d0-4cd7-88e2-d260f9bc5b72.gif"
            alt="img"
          />
        </div>

        {/* crusing image section */}

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">WHAT WE'RE CRUSHING ON</p>
          <div className="flex">
            {crushing_img.map((e, id) => (
              <div className="flex-1 m-3" key={id}>
                <img src={e} className="w-full" alt="img" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">HOT RIGHT NOW</p>
          <img
            src="https://img.faballey.com/images/banner/dbb7a3bf-c7a1-48d9-80e3-e9b3f70215e8.jpg"
            alt="img"
          />
        </div>

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">SIZZLING & SPANKIN' NEW</p>
          <img
            src="https://img.faballey.com/images/banner/f0a87b26-3e39-40cc-a090-c9e0e69143b7.jpg"
            alt="img"
          />
        </div>

        {/* making first which have title and price slider with more than one pic */}

        <div className="slideshow relative">
          <div
            className="slideshowSlider transition ease-linear duration-1000 "
            style={{ transform: `translate(${-newIndex * 20}%, 0)` }}
          >
            {fresh_pro.map((e, i) => (
              <div className="slide font-semibold" key={i}>
                <img src={e.url} className="w-full" alt="img" />
                <div>{e.title}</div>
                <div className="mb-2">
                  <span className="text-rose-400 mr-2">{e.newPrice}</span>
                  <span className="line-through">{e.oldPrice} </span>
                </div>
              </div>
            ))}
          </div>

          <div
            onClick={bottomSlideRight}
            className={
              newIndex === fresh_pro.length - 5
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪢
          </div>

          <div
            onClick={bottomSlideLeft}
            className={
              newIndex === 0
                ? "hidden"
                : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
            }
          >
            ⪡
          </div>
        </div>

        {/* deals you dont want to miss section*/}

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">DEALS YOU DON'T WANT TO MISS</p>
          <div className="slideshow relative">
            <div
              className="slideshowSlider transition ease-linear duration-1000 "
              style={{ transform: `translate(${-deal * 20}%, 0)` }}
            >
              {dealImages.map((e, i) => (
                <div className="slide" key={i}>
                  <img src={e} className="w-full" alt="img" />
                </div>
              ))}
            </div>

            <div
              onClick={dealNext}
              className={
                deal === dealImages.length - 5
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪢
            </div>

            <div
              onClick={dealPrev}
              className={
                deal === 0
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪡
            </div>
          </div>
        </div>

        {/* in the spotlight section */}

        <div className="text-center text-2xl font-semibold ">
          <p className="m-4">IN THE SPOTLIGHT SECTION</p>
          <div className="flex">
            {spotlight_img.map((e, id, i) => (
              <div className="flex-1 m-2" key={id}>
                <img src={e} className="w-full" alt="img" />
              </div>
            ))}
          </div>
        </div>

        {/* party wear 50% off section*/}

        <div className="mt-8">
          <img
            src="https://img.faballey.com/images/banner/fd905333-24c1-4a6d-b8ae-9bb9837dca5d.jpg"
            alt="img"
          />
        </div>

        {/* recommended for you section */}

        <div className="bg-gray-50 mt-10">
          <p className="m-4 py-4 text-center text-2xl font-semibold">
            RECOMMENDED FOR YOU
          </p>
          <div className="slideshow relative">
            <div
              className="slideshowSlider transition ease-linear duration-1000 "
              style={{ transform: `translate(${-recommend * 20}%, 0)` }}
            >
              {recommended_image.map((e, i) => (
                <div className="slide font-semibold" key={i}>
                  <img src={e.url} className="w-full" alt="img" />
                  <div>{e.title}</div>
                  <div className="mb-2">
                    <span className="text-rose-400 mr-2">{e.newPrice}</span>
                    <span className="line-through">{e.oldPrice} </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              onClick={recommendeNext}
              className={
                recommend === recommended_image.length - 5
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 right-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪢
            </div>

            <div
              onClick={recommendPrevious}
              className={
                recommend === 0
                  ? "hidden"
                  : "nextButton text-lg bg-white rounded-md text-center font-semibold absolute top-1/2 left-6 w-8 h-8 cursor-pointer"
              }
            >
              ⪡
            </div>
          </div>
        </div>
      </div>
    </>
  );
};