import heroImage from "../assets/images/hero.webp";

import {
  FiArrowRight,
  FiPhone
} from "react-icons/fi";


function Hero(){

  return(

    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >


      {/* Background Image */}

      <img
        src={heroImage}
        alt="Professional tree service"
        loading="eager"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />



      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />



      {/* Green Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#064e3b]
          via-[#064e3b]/80
          to-transparent
        "
      />




      {/* Content */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-8
          sm:px-10
          lg:px-16
          py-32
        "
      >


        <div
          className="
            max-w-3xl
            text-white
          "
        >


          {/* Badge */}

          <span
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-[#C9A227]/20
              border
              border-[#C9A227]/50
              text-[#F5D77A]
              font-semibold
              text-sm
              mb-6
            "
          >

            Professional Tree Care Experts

          </span>




          {/* Heading */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              leading-tight
            "
          >

            Quality Tree Service
            <br />

            For Your Property

          </h1>




          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              sm:text-xl
              text-white/90
              max-w-xl
              leading-relaxed
            "
          >

            Special Tree Service Roslyn provides professional tree removal,
            trimming, pruning, and emergency tree care solutions to keep your
            property safe and beautiful.

          </p>




          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >


            <a
              href="#contact"
              className="
                flex
                items-center
                gap-2
                bg-[#C9A227]
                text-[#064e3b]
                px-8
                py-4
                rounded-full
                font-bold
                shadow-xl
                hover:bg-[#e5c34f]
                transition
              "
            >

              Get Free Estimate

              <FiArrowRight />

            </a>




            <a
              href="tel:516-882-3300"
              className="
                flex
                items-center
                gap-2
                bg-white
                text-[#064e3b]
                px-8
                py-4
                rounded-full
                font-bold
                shadow-xl
                hover:bg-gray-100
                transition
              "
            >

              <FiPhone />

              Call Now

            </a>


          </div>





          {/* Stats */}

          <div
            className="
              mt-14
              flex
              flex-wrap
              gap-10
            "
          >


            <div>

              <h3
                className="
                  text-4xl
                  font-black
                  text-[#C9A227]
                "
              >
                10+
              </h3>

              <p className="text-white/80">
                Years Experience
              </p>

            </div>



            <div>

              <h3
                className="
                  text-4xl
                  font-black
                  text-[#C9A227]
                "
              >
                500+
              </h3>

              <p className="text-white/80">
                Projects Completed
              </p>

            </div>



            <div>

              <h3
                className="
                  text-4xl
                  font-black
                  text-[#C9A227]
                "
              >
                100%
              </h3>

              <p className="text-white/80">
                Customer Satisfaction
              </p>

            </div>


          </div>



        </div>


      </div>



    </section>

  );

}


export default Hero;