import finchley_im1 from "@/assets/finchley-im1.png";
import { Clock, MapPin, Phone } from "lucide-react";

// const services = [
//   { title: "Beauty", image: ban1 },
//   { title: "Advanced Skin Care", image: ban2 },
//   { title: "Massage", image: ban3 },
//   { title: "Laser Hair Removal", image: ban4 },
// ];

function FinchleyCenteral() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="w-full">
            <img
              src={finchley_im1}
              alt="Finchley Central Spa"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          <div>
            <h2 className="font-mulish text-4xl font-light tracking-wide mb-[15px]">
              Finchley Central
            </h2>

            <p className="font-mulish uppercase text-sm tracking-widest mb-5">
              Ballards Lane, London
            </p>

            <p className="font-quattro text-para text-base leading-relaxed mb-[15px]">
              Welcome to the Thai Maneee Spa established by experienced team in
              the industry to bring one-stop destination for relaxation and
              beauty at one place! Located in the heart of Finchley Central, our
              Massage Spa offers a unique and authentic experience.
            </p>

            <p className="mb-[15px] text-para text-base leading-relaxed">
              With our fully trained therapists who specialise in various
              massage techniques such as Thai Yoga Massage, Aromatherapy, Hot
              Stone Therapy, Deep Tissue or Sports Massage – we promise you'll
              emerge feeling rejuvenated. But wait… our services don't stop
              there! We also offer exceptional Beauty Treatments including Hydra
              facial and facials using high-end skincare products by Crystal
              Clear and Environ which cater to all skin types.
            </p>

            <p className="mb-[15px] text-para text-base leading-relaxed">
              Struggling with body hair? Look no further than our Laser Hair
              Removal treatments that use state of the art technology ensuring
              painless hair removal leaving you with smooth skin like never
              before.
            </p>

            <button className="font-mulish underline cursor-pointer border-black text-sm tracking-widest hover:text-para text-base transition">
              Treatment Menu
            </button>
          </div>
        </div>
      </section>

      {/* --- */}
        <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3">

        {/* Hours */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="w-12 h-12 rounded-full bg-[#f6efec] flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-black" />
          </div>
          <h4 className="tracking-[0.2em] text-sm uppercase mb-2">Hours</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            Mon To Sun <br />
            10:00 am to 09:00 pm
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center px-6 border-y md:border-y-0 md:border-x border-gray-200">
          <div className="w-12 h-12 rounded-full bg-[#f6efec] flex items-center justify-center mb-4">
            <MapPin className="w-5 h-5 text-black" />
          </div>
          <h4 className="tracking-[0.2em] text-sm uppercase mb-2">Location</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            92 – 94, Ballards Lane, London, <br />
            N3 2DL
          </p>
          <a
            href="#"
            className="mt-3 text-sm tracking-widest underline underline-offset-4 hover:text-gray-500"
          >
            Get Directions
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center text-center px-6">
          <div className="w-12 h-12 rounded-full bg-[#f6efec] flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-black" />
          </div>
          <h4 className="tracking-[0.2em] text-sm uppercase mb-2">Contact</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            0208 371 6922 <br />
            finchley@layana.co.uk
          </p>
        </div>

      </div>
       </section>
    </>
  );
}

export default FinchleyCenteral;
