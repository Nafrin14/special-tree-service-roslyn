import { useState } from "react";
import { FiCalendar, FiArrowRight, FiChevronUp } from "react-icons/fi";


function Blog() {


  const [openArticle, setOpenArticle] = useState(null);



  const blogs = [

    {
      date:"July 2026",
      title:"Essential Tree Care Tips for Homeowners",
      category:"Maintenance",

      description:
      "Learn how regular tree maintenance, pruning, and inspections can keep your trees healthy and your property safe.",

      content:
      "Regular tree care is important for maintaining healthy and beautiful trees. Homeowners should schedule routine inspections, remove dead branches, provide proper watering, and monitor signs of disease. Professional arborists can identify hidden problems before they become major safety issues."
    },


    {
      date:"June 2026",
      title:"Why Professional Tree Trimming Matters",
      category:"Trimming",

      description:
      "Professional tree trimming improves tree growth, removes dangerous branches, and enhances your landscape appearance.",

      content:
      "Tree trimming is not only about improving appearance. Proper trimming helps trees grow stronger, prevents branch failures, improves sunlight exposure, and reduces risks around your home. Professional trimming ensures the correct techniques are used without damaging the tree."
    },


    {
      date:"May 2026",
      title:"Signs You Need Tree Removal Services",
      category:"Safety",

      description:
      "Discover common warning signs that indicate a tree may become a safety risk and require professional removal.",

      content:
      "Some trees become dangerous due to disease, storm damage, root problems, or structural weakness. Warning signs include leaning trees, large dead branches, cracks in the trunk, and exposed roots. A professional tree service can inspect the tree and recommend the safest solution."
    }

  ];



  return (

    <section 
      id="blog" 
      className="py-24 bg-white relative"
    >


      <div className="container mx-auto px-6 lg:px-12">


        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-16">


          <span 
            className="
            inline-block 
            py-1 
            px-3 
            rounded-full 
            bg-emerald-100 
            text-emerald-700 
            font-bold 
            uppercase 
            tracking-widest 
            text-xs 
            mb-4"
          >

            Latest Articles

          </span>



          <h2 
            className="
            text-4xl 
            md:text-5xl 
            font-black 
            text-emerald-950 
            mb-6"
          >

            Tree Care Tips & <br/>

            <span className="text-emerald-600">

              Expert Advice

            </span>


          </h2>



          <p className="text-lg text-slate-600">

            Helpful information, seasonal guides, and expert tips from the certified arborists at Special Tree Service Roslyn.

          </p>


        </div>





        {/* Blog Cards */}


        <div 
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-8"
        >



        {
          blogs.map((blog,index)=>(


            <article

              key={index}

              className="
              bg-slate-50 
              border 
              border-slate-100 
              rounded-[2rem] 
              p-8 
              hover:-translate-y-2 
              hover:shadow-xl 
              transition-all 
              duration-300"

            >



              <div 
                className="
                flex 
                items-center 
                justify-between 
                mb-6 
                text-sm"
              >


                <div 
                  className="
                  flex 
                  items-center 
                  gap-2 
                  text-slate-500 
                  font-semibold"
                >

                  <FiCalendar className="text-emerald-500"/>

                  {blog.date}

                </div>



                <span 
                  className="
                  bg-emerald-100 
                  text-emerald-700 
                  py-1 
                  px-3 
                  rounded-full 
                  font-bold 
                  text-xs"
                >

                  {blog.category}

                </span>


              </div>





              <h3 
                className="
                text-2xl 
                font-bold 
                text-emerald-950 
                mb-4"
              >

                {blog.title}

              </h3>




              <p className="text-slate-600 leading-relaxed">

                {blog.description}

              </p>





              {
                openArticle === index &&

                <p 
                  className="
                  mt-5 
                  text-slate-600 
                  leading-relaxed 
                  border-t 
                  pt-5"
                >

                  {blog.content}

                </p>

              }





              <button

                onClick={()=>setOpenArticle(
                  openArticle === index ? null : index
                )}

                className="
                flex 
                items-center 
                gap-2 
                mt-6 
                text-emerald-700 
                font-bold 
                hover:text-amber-600"

              >

                {
                  openArticle === index
                  ?
                  "Close Article"
                  :
                  "Read Full Article"
                }



                {
                  openArticle === index
                  ?
                  <FiChevronUp/>
                  :
                  <FiArrowRight/>
                }


              </button>



            </article>


          ))

        }



        </div>


      </div>


    </section>

  );

}


export default Blog;