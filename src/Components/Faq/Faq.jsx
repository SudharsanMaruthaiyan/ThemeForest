import { profile, shaped, shaper } from "../../assets/image/image"
import Accodion from "../Accodion/Accodion"

const Faq = () => {
  return (
    <>
        <div className=" 2xl:container mx-auto bg-[#F5F5F5] pb-20">
            <div className="lg:w-[93%] xl:w-[85%] mx-auto py-20 w-[90%]">
                <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <div className=" relative">
                        <div className="">
                            <img src={profile} alt="Profile" className=" relative z-40"/>
                            <img src={shaped} alt="shape" className=" absolute -top-9 right-8 z-20 lg:right-0 "/>
                        </div>
                            
                        <div className=" absolute xl:absolute md:absolute xl:-right-3 xl:top-[524px] bg-[#002935] lg:absolute lg:top-[400px] lg:right-0 md:right-3 md:top-[524px] py-10 px-7 pr-16 rounded-lg z-50">
                            <h1 className=" font-[manrope-b] text-[22px] font-bold text-wrap text-white">Contact Us For a <span className=" text-[#1176F0]">Free Learning</span>  <br className=" lg:hidden xl:block"/> Consulting Evaluation</h1>
                            <div className=" flex items-center pt-4">
                                <img src={shaper} alt="" />
                            <p className="text-[#FF3158]"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
                            </div>
                        </div>
                    </div>
                    {/* accodion section  */}
                    <div className="mt-72 md:mt-32  lg:mt-0">
                        <div>
                        {/* bg-[#F6E2E6] */}
                            <div className=" flex items-center  gap-1">
                                <div className=" p-2 bg-[#6daaf590] rounded-full">
                                    <div className=" h-3 w-3 bg-[#1176F0] rounded-full shadow-yellow-300"></div>
                                </div>
                                <p className=" text-[#1176F0] font-bold font-[manrope-b] text-[18px]">FAQ</p>
                            </div>
                            <p className="text-[48px] font-[manrope-b] leading-[57px] pt-4 font-bold">Frequently Asked <br /> Questions</p>
                            <p className=" pt-5 font-[manrope] text-[#6c6f70] text-[16px] pb-5" >Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.</p>
                            <Accodion title  = "1. Why choose us for your education?"
                            content = "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
                            />
                            <Accodion title  = "2. Why choose us for your education?"
                            content = "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
                            />
                            <Accodion title  = "3. What We Offer To You?"
                            content = "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
                            />
                            <Accodion title  = "How We Provides Service For You?"
                            content = "We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq