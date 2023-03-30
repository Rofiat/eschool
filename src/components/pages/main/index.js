import React from "react";
import { Bounce, Fade } from "react-reveal";
import { Card } from "flowbite-react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import arrow from "../../images/arrow.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import fb from "../../images/fb.png";
import inst from "../../images/inst.png";
import twt from "../../images/twt.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import map from "../../images/map.png";
import down from "../../images/down.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import boy from "../../images/boy.png";
import girl from "../../images/girl.png";
import stars from "../../images/stars.png";
import circle from "../../images/circle.png";
import circleg from "../../images/circleg.png";
import three from "../../images/three.png";
import foure from "../../images/foure.png";
import lovecircle from "../../images/lovecircle.png";
import blackpill from "../../images/blackpill.png";

const main = () => {
  const whys = [
    {
      id: 1,
      img: icon2,
      title: "Lifetime access",
      content:
        "The gradual accumulation of information about atomic and small-scale behavior...",
      bColor: "white",
      color: "rgb(71 85 105)",
      hColor: "#ff6551",
    },
    {
      id: 2,
      img: icon1,
      title: "Training courses",
      content:
        "The gradual accumulation of information about atomic and small-scale behavior...",
      bColor: "white",
      color: "rgb(71 85 105)",
      hColor: "#ff6551",
    },
    {
      id: 3,
      img: icon3,
      title: "Expert instruction",
      content:
        "The gradual accumulation of information about atomic and small-scale behavior...",
      bColor: "#ff6551",
      color: "white",
      hColor: "white",
    },
  ];
  const four = [
    {
      img: one,
      title: "Our Expert Teacher",
      red: "Books Library",
    },
    {
      img: two,
      title: "Watch our Courses",
      red: "Training Courses",
    },
    {
      img: three,
      title: "Watch our Courses",
      red: "Expert Instruction",
    },
    {
      img: foure,
      title: "Get Quality Education",
      red: "Training Courses",
    },
  ];
  const long = [
    {
      img: lovecircle,
      title: "FREE",
      content1: "Organize across all apps by hand",
      price: "19$",
      duration: "Per Month",
      content2: "Slate helps you see how many more days you need...",
      img1: circle,
      img2: circleg,
      content3: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support",
      ],
    },
    {
      img: lovecircle,
      title: "FREE",
      content1: "Organize across all apps by hand",
      price: "19$",
      duration: "Per Month",
      content2: "Slate helps you see how many more days you need...",
      img1: circle,
      img2: circleg,
      content3: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support",
      ],
    },
    {
      img: lovecircle,
      title: "FREE",
      content1: "Organize across all apps by hand",
      price: "19$",
      duration: "Per Month",
      content2: "Slate helps you see how many more days you need...",
      img1: circle,
      img2: circleg,
      content3: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support",
      ],
    },
  ];
  const reviews = [
    {
      img: boy,
      title: "Regina Miles",
      imga: stars,
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      img: girl,
      title: "Regina Miles",
      imga: stars,
      content:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
  ];
  return (
    <div className="">
      <div className="w-full h-full bg-white px-[14%]">
        <div className="absolute top-[45%] md:top-[60%] lg:top-[98%] w-[72%] space-y-5 sm:space-y-0 items-center text-center">
          <div className="flex flex-col md:flex-row sm:min-h-[33vh] gap-x-[3%]">
            {whys.map((why) => (
              <Card
                key={why.title}
                style={{ background: why.bColor, border: why.bColor }}
                className="rounded-none mb-10 sm:mb-0"
              >
                <div
                  key={why.title}
                  style={{ color: why.color }}
                  className="w-[80%] space-y-4 pl-4 py-4 text-center sm:text-start"
                >
                  <img
                    alt="icon"
                    src={why.img}
                    className="w-[60px] mx-auto sm:mx-0"
                  />
                  <p className="text-xl font-bold">{why.title}</p>
                  <hr
                    class="w-10 h-0.5 my-2 mx-auto sm:mx-4 md:mx-0 border-0 rounded md:my-4"
                    style={{ background: why.hColor }}
                  ></hr>
                  <p
                    className="text-slate-500 text-xs"
                    style={{ color: why.color }}
                  >
                    {why.content}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-[1200px] xs:mt-[1000px] xs:mb-10 md:mt-96 md:mb-32 lg:mt-84 lg:mb-40 grid grid-cols-1 sm:grid-cols-2 md:space-x-[25%] items-center text-center sm:text-start">
          <div className="w-full">
            <Bounce left>
              <img className="" alt="mobile" src={img1} />
            </Bounce>
          </div>
          <div className="w-full md:w-[75%]">
            <Bounce right>
              <div className="space-y-5 md:space-y-1 lg:space-y-10">
                <hr className="bg-[#ff6551] w-20 h-1.5 my-2 md:my-0 mx-auto md:mx-0"></hr>
                <p className="text-2xl lg:text-4xl font-bold tracking-wide text-slate-600">
                  Watch our Courses
                </p>
                <p className="text-slate-600 text-sm">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics Newtonian mechanics{" "}
                </p>
                <button href="somewhere" className="text-[#ff6551]">
                  <p className="text-sm font-bold w-75 mr-2 float-left">
                    Learn More
                  </p>
                  <img src={arrow} alt="arrow" className="w-15 mt-0.5" />
                </button>
              </div>
            </Bounce>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center text-center sm:text-start">
          <div className="w-full md:pr-28">
            <Bounce left>
              <div className="space-y-5 md:space-y-1 lg:space-y-10">
                <hr className="bg-[#ff6551] w-20 h-1.5 my-2 md:my-0 mx-auto md:mx-0"></hr>
                <p className="text-2xl lg:text-4xl font-bold tracking-wide text-slate-600">
                  Every Client Matters
                </p>
                <p className="text-slate-600 text-sm">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics Newtonian mechanics{" "}
                </p>
                <button href="somewhere" className="text-[#ff6551]">
                  <p className="text-sm md:text-xs font-bold w-75 mr-2 float-left">
                    Learn More
                  </p>
                  <img src={arrow} alt="arrow" className="w-15 mt-0.5" />
                </button>
              </div>
            </Bounce>
          </div>
          <div className="w-full mb-10">
            <Bounce right>
              <img className="" alt="mobile" src={img2} />
            </Bounce>
          </div>
        </div>
        <div className="text-center sm:text-start sm:pr-24">
          <div className="w-full md:w-[45%] md:my-32 space-y-2 my-4 sm:space-y-5">
            <Fade right>
              <p className="text-sm font-bold text-[#ff6551]">Courses</p>
              <p className="text-2xl md:text-4xl font-bold tracking-wide text-slate-600">
                Get Quality Education
              </p>
              <p className="text-slate-600 text-sm">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics Newtonian mechanics
              </p>
            </Fade>
          </div>
        </div>
        <div className="items-center text-center">
          <div className="flex flex-col md:flex-row min-h-[33vh] gap-x-[3%]">
            {four.map((four) => (
              <Card
                imgSrc={four.img}
                className="rounded-none border-none shadow-none"
              >
                <div className="text-start md:text-center pl-[-10px]">
                  <p className="text-xs font-bold text-[#ff6551] md:mb-2">
                    {four.red}
                    <img
                      src={blackpill}
                      alt="pill"
                      className="w-[10] ml-2 md:ml-0 inline"
                    />
                  </p>
                  <p className="text-sm text-gray-700 font-bold md:mb-2">
                    {four.title}
                  </p>
                  <p className="text-xs text-gray-500 font-bold md:mb-2">
                    We focus on ergonomics and meeting you...
                  </p>
                  <p className="text-xs text-gray-500 font-bold">
                    <img
                      src={down}
                      alt="down"
                      className="w-[10] inline mr-2 mt-[-4px]"
                    />
                    15 Sales
                  </p>
                  <div className="mt-[5px]">
                    <p className="inline text-sm text-gray-500 font-bold mr-2">
                      $16.48
                    </p>
                    <p className="inline text-sm text-blue-900 font-bold">
                      $6.48
                    </p>
                  </div>
                  <button
                    href="somewhere"
                    className="md:py-1 md:px-1 mt-2 py-2 px-3 outline outline-1 outline-offset-3 outline-[#ff6551] text-[#ff6551] rounded-full"
                  >
                    <p className="text-xs font-bold w-75 mr-2 float-left">
                      Learn More
                    </p>
                    <img src={arrow} alt="arrow" className="w-15 h-3 mt-1" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#26335D] w-full h-full my-[10%] px-[14%] py-0.5">
        <div className="text-center sm:text-start sm:pr-24 sm:my-[-15px]">
          <div className="w-full md:w-[55%] lg:w-[65%] md:my-40 my-4 space-y-2 sm:space-y-5">
            <Fade right>
              <p className="text-sm font-bold text-[#ff6551]">
                Practice advice
              </p>
              <p className="text-2xl md:text-4xl font-bold tracking-wide text-white">
                Most Popular Courses
              </p>
              <p className="text-white text-sm">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics Newtonian mechanics
              </p>
            </Fade>
          </div>
        </div>
        <div className="items-center text-center">
          <div className="flex flex-col md:flex-row min-h-[33vh] gap-x-[3%] mb-8 sm:mb-32">
            {long.map((long) => (
              <Card className="rounded-none mb-10 sm:mb-0" key={long.title}>
                <div className="w-[90%] space-y-1 md:space-y-6 pl-4 py-4 text-center sm:text-start">
                  <img
                    alt="icon"
                    src={long.img}
                    className="w-[60px] mx-auto sm:mx-0"
                  />
                  <p className="text-xl font-bold">{long.title}</p>
                  <p className="text-slate-500 text-xs font-bold tracking-wide">
                    {long.content1}
                  </p>
                  <div className="">
                    <p className="text-[#ff6551] text-3xl mt-3 md:mt-12 font-bold md:leading-[1px]">
                      {long.price}
                    </p>
                    <p className="text-blue-300 text-xs mt-1 md:mt-5 font-bold">
                      {long.duration}
                    </p>
                  </div>
                  <p className="text-slate-500 text-xs tracking-wide">
                    {long.content2}
                  </p>
                  <button
                    href="somewhere"
                    className="w-full md:py-3 md:px-5 mt-2 py-2 px-3 border-[#ff6551] bg-[#ff6551] text-white rounded"
                  >
                    <p className="text-xs font-bold mr-2 text-center">
                      Try for free
                    </p>
                  </button>
                  <div>
                    {long.content3.map((con) =>
                      con.includes("Unlimited") ? (
                        <div>
                          <img
                            src={long.img2}
                            alt="img2"
                            className="w-6 float-left mr-2 mt-1"
                          />
                          <p
                            className="text-slate-800 text-xs font-bold py-2 tracking-wide"
                            key={con}
                          >
                            {con}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={long.img1}
                            alt="img1"
                            className="w-6 float-left mr-2 mt-1"
                          />
                          <p
                            className="text-slate-800 text-xs font-bold py-2 tracking-wide"
                            key={con}
                          >
                            {con}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white px-[14%]">
        <div className="text-center sm:text-start sm:pr-24 sm:my-[-15px]">
          <div className="w-full md:w-[55%] lg:w-[65%] md:my-40 my-4 space-y-2 sm:space-y-5">
            <Fade right>
              <p className="text-sm font-bold text-[#ff6551]">Testimonials</p>
              <p className="text-2xl md:text-4xl font-bold tracking-wide text-gray-800">
                Our Popular Courses
              </p>
              <p className="text-gray-600 text-sm">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics Newtonian mechanics
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex flex-col md:flex-row min-h-[33vh] gap-x-[3%]">
          {reviews.map((rev) => (
            <Card
              key={rev.title}
              className="rounded-none shadow-none border-none"
            >
              <div
                key={rev.title}
                className="space-y-4 py-4 px-[20%] items-center text-center"
              >
                <img alt="icon" src={rev.img} className="mx-auto" />
                <p
                  className="text-slate-500 text-xs font-bold"
                  style={{ color: rev.color }}
                >
                  {rev.content}
                </p>
                <img src={rev.imga} alt="stars" className="mx-auto" />
                <p className="text-sm text-slate-700 font-bold">{rev.title}</p>
                <p className="text-slate-500 text-xs font-bold">Designer</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center sm:px-[20%] space-y-5 sm:space-y-10 mb-20">
          <div className="md:my-20 my-4 space-y-5 mx-auto">
            <Fade top>
              <p className="text-sm font-bold text-[#ff6551]">Newsletter</p>
              <p className="text-2xl md:text-4xl font-bold tracking-wide text-gray-800">
                Our Popular Courses
              </p>
              <p className="text-gray-600 text-sm">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics Newtonian mechanics
              </p>
            </Fade>
          </div>
          <div className="flex max-sm:flex-col max-sm:gap-3">
            <input
              type="email"
              placeholder="Your Email"
              class="rounded-md border sm:rounded-r-none border-gray-300 bg-gray-100 px-4 py-2 flex-grow hover:border-violet-400 focus:border-violet-500 focus:outline-none"
            />
            <button class="rounded-md sm:rounded-l-none bg-[#ff6551] px-4 py-2 font-semibold text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="items-center text-center sm:text-start">
          <div className="flex flex-col sm:flex-row md:gap-5 tracking-wide space-y-10 md:space-y-0">
            <div className="w-full sm:w-[17%]">
              <p className="text-sm font-bold my-4 text-gray-800">
                Company Info
              </p>
              <div className="text-xs space-y-5 font-bold text-gray-600">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>
            <div className="w-full sm:w-[17%]">
              <p className="text-sm font-bold my-4 text-gray-800">Legal</p>
              <div className="text-xs space-y-5 font-bold text-gray-600">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>
            <div className="w-full sm:w-[17%]">
              <p className="text-sm font-bold my-4 text-gray-800">Features</p>
              <div className="text-xs space-y-5 font-bold text-gray-600">
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
              </div>
            </div>
            <div className="w-full sm:w-[17%]">
              <p className="text-sm font-bold my-4 text-gray-800">Resources</p>
              <div className="text-xs space-y-5 font-bold text-gray-600">
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
              </div>
            </div>
            <div className="w-full sm:w-[32%]">
              <p className="text-sm font-bold my-4 text-gray-800">
                Get In Touch
              </p>
              <div className="text-xs space-y-5 font-bold text-gray-600">
                <p>
                  <img src={phone} alt="fone" className="mr-4 md:mr-2 inline" />
                  <span>(480) 555-0103</span>
                </p>
                <p>
                  <img src={map} alt="map" className="mr-4 md:mr-2 inline" />
                  <span>4517 Washington Ave.Manchester, Kentucky 39495</span>
                </p>
                <p>
                  <img src={mail} alt="mail" className="mr-4 md:mr-2 inline" />
                  <span>debra.holt@examole.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#FAFAFA] px-[14%] mt-20 py-5 text-center">
        <div className="flex flex-col sm:flex-row bg-[#FAFAFA] place-content-between space-y-5 md:space-y-0">
          <p className="text-xs tracking-wider font-bold text-gray-600">
            Made With Love By Figmaland All Right Reserved
          </p>
          <div className="flex mx-auto">
            <img src={fb} alt="fb" className="md:mr-5" />
            <img src={inst} alt="inst" className="md:mr-5" />
            <img src={twt} alt="twt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
