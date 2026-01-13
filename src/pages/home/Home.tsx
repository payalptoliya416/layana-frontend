import im1 from "@/assets/im1.png";
import im2 from "@/assets/im2.png";
import ever from "@/assets/ever.png";
import home_banner from "@/assets/home-banner.png";
import { Link } from "react-router-dom";
import CommonButton from "../../component/common/home/CommonButton";
import home_bg from "@/assets/home_bg.png";

import ServiceCard from "../../component/common/home/ServiceCard";
import ban1 from "@/assets/ban1.png";
import ban2 from "@/assets/ban2.png";
import ban3 from "@/assets/ban3.png";
import ban4 from "@/assets/ban4.png";


import TeamCard from "../../component/common/home/TeamCard";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import team4 from "@/assets/team4.png";
import BrandSlider from "../../component/common/home/BrandSlider";

const services = [
  { title: "Beauty", image: ban1 },
  { title: "Advanced Skin Care", image: ban2 },
  { title: "Massage", image: ban3 },
  { title: "Laser Hair Removal", image: ban4 },
];

const team = [
  {
    name: "JOHN DOE",
    role: "Massage Therapist",
    bio: "I am massage therapist and I completed formal training and certificate and diploma programs in USA.",
    image: team1,
  },
  {
    name: "JOHN DOE",
    role: "Massage Therapist",
    bio: "I am massage therapist and I completed formal training and certificate and diploma programs in USA.",
    image: team2,
  },
  {
    name: "JOHN DOE",
    role: "Massage Therapist",
    bio: "I am massage therapist and I completed formal training and certificate and diploma programs in USA.",
    image: team3,
  },
  {
    name: "JOHN DOE",
    role: "Massage Therapist",
    bio: "I am massage therapist and I completed formal training and certificate and diploma programs in USA.",
    image: team4,
  },
];
function Home() {
  return (
    <>
      <section className="py-12 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-[50px]">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-[25px] leading-[36px] font-light text-justify">
                A team of professional hairstylists with more than fifteen years
                of experience in fashioning memorable and creative looks
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="text-base leading-[26px] font-normal text-justify font-quattro text-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---- */}
      <section className="py-12 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-[50px]">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <img src={im1} alt="finchley" className="w-full mb-5" />
                <h3 className="font-mulish text-[12px] leading-[14px] font-normal tracking-[0.1em] uppercase mb-[15px]">
                  FINCHLEY CENTRAL
                </h3>
                <div className="flex justify-between items-center">
                  <h2 className="text-[32px] leading-[32px] font-quattro font-normal tracking-[0.2em] text-black mb-[15px]">
                    Layana
                  </h2>
                  <h2 className="font-mulish text-base leading-[16px] font-normal text-primary text-right">
                    medispa
                  </h2>
                </div>
                <Link
                  to="#"
                  className="font-mulish text-xs leading-[14px] font-normal tracking-[0.1em] uppercase underline underline-offset-1 text-black"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div>
                <img src={im2} alt="finchley" className="w-full mb-5" />
                <h3 className="font-mulish text-[12px] leading-[14px] font-normal tracking-[0.1em] uppercase mb-[15px]">
                  MUSWELL HILL
                </h3>
                <div className="flex justify-between items-center">
                  <h2 className="text-[32px] leading-[32px] font-quattro font-normal tracking-[0.2em] text-black mb-[15px]">
                    Layana
                  </h2>
                  <h2 className="font-mulish text-base leading-[16px] font-normal text-primary text-right">
                    spa on the hill
                  </h2>
                </div>
                <Link
                  to="#"
                  className="font-mulish text-xs leading-[14px] font-normal tracking-[0.1em] uppercase underline underline-offset-1 text-black"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- */}
      <section className="relative w-full py-16 lg:py-32 overflow-hidden">
        {/* LEFT BEIGE BACKGROUND BAR */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-[#f6eee9]"></div>

        {/* MAIN GRID */}
        <div className="relative container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
            {/* LEFT CONTENT (inside container but over beige) */}
            <div className="lg:col-span-6 relative z-10 text-center">
              <p className="font-mulish text-[12px] tracking-[0.2em] uppercase mb-3">
                Beauty
              </p>

              <h2 className="font-mulish text-[28px] sm:text-4xl leading-[55px] mb-[25px]">
                Do even more for your skin in less steps than ever
              </h2>

              <p className="font-quattro text-para text-base leading-[26px] mb-[35px] max-w-[498px] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <CommonButton>Read More</CommonButton>
            </div>

            {/* RIGHT IMAGE – touches screen edge */}
            <div className="lg:col-span-6 relative z-10">
              <div className="w-full">
                <img
                  src={ever}
                  alt="Products"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- */}
      <section className="py-12 lg:py-[110px]">
        <div className="container mx-auto">
          <img src={home_banner} alt="banner" className="w-full" />
        </div>
      </section>
      {/* ------ */}
      <section className="relative w-full h-[400px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${home_bg})` }}>
        <div className="container mx-auto text-center">
          <h1 className="font-mulish text-white text-[28px] sm:text-[42px] lg:text-[65px] leading-[75px]">
            Your wellness in <br className="hidden sm:block" /> your control
          </h1>
        </div>
      </section>
      {/* --- */}
     <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </section>
    {/* -------- */}
    <section className="py-12 lg:py-[110px]">
      <div className="container mx-auto px-4">

        <h2 className="font-quattro text-center text-[36px] mb-14">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        <div className="flex justify-center">
          <CommonButton>View All</CommonButton>
        </div>

      </div>
    </section>
    {/* -------- */}
    <BrandSlider />
    {/* ---- */}
    </>
  );
}

export default Home;
