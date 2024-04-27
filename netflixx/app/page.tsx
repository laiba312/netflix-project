import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent } from "@/components/ui/accordion"
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { AccordionDemo } from "./accordian"
export default function Home(){
  return( 
    <main>
    <section className="w-[100%] h-[76vh] sm:h-[89vh] custom-img bg-cover bg-center">

      <div className="w-[100%] h-[76vh] sm:h-[89vh] bg-[rgba(0,0,0,0.7)]">
        <header className="max-w-[1300px] mx-auto ">
          <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] sm:grid-cols-[30%_70%]  px-[10px] pt-3  sm:pt-1 ">
            <figure className="">
              <img src="netflixlogo.jpg" className="w-[170px] sm:w-[189px] sm:" alt="" />
            </figure>
            <div className="text-end grid sm:grid-cols-2  grid-cols-[auto_40%]">
              <div></div>
              
              <div className=" text-cyan-50 bg-[red] text-center  py-1  rounded-md mx-[7px] my-[7px]  sm:ml-[360px] sm:my-6 ">
                <div >
                <Link href="/Sign_In ">Sign In</Link>
                </div>

              </div>
              
            </div>

            
          
          </div>

        </header>
        <div className="max-w[1070px] mx-auto sm:pt-[182px] pb-[7px] pt-[60px]">
          <h1 className="text-[31px] sm:text-[48px] font-bold text-center text-white px-0">Unlimited movies, TV shows, and more</h1>
          <h1 className="text-[17px] sm:text-[25px] text-center text-white py-4 sm:py-3 ">Watch anywhere. Cancel anytime.</h1>
          <h1 className="text-[18px] sm:text-[21px]  text-center text-white px-11 mb-5 sm:mb-0">Ready to watch? Enter your email to create or restart your membership.</h1>

        </div>
        <div className="sm:max-w[700px] sm:max-w-[100%] mx-auto  ">
          <form action="" className="sm:grid-cols-2 sm:grid-cols-[55%_auto] grid grid-cols-1 items-baseline gap-3  ">
               <input type="email" name="email" id="" placeholder="Email address" className="border-[1px] h-[47px]  sm:h-[58px] mx-12 sm:mx-0 sm:ml-[470px] pl-4 sm:pl-4 rounded-md border-[#8d8686] bg-[rgba(41,38,38,0.47)] " />
               <Link href="" className="font-black text-white text-center   bg-[red] py-3 mt-1 sm:py-4 sm:mr-[520px] sm:mx-0 mx-[100px] rounded " >Get Started > </Link>
          </form>
        </div>
      </div>
    </section>
    

    <section className="max-w-[100%]  bg-black  py-[34px] sm:py-[65px]  border-t-[8px] border-t-[#3b3838] ">

      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-11 items-center">
          <div className="text-white   ">
            <h2 className="font-bold  sm:text-left text-[33px] sm:text-[45px] my-1 sm:my-0 text-center">Enjoy on your TV</h2>
            <p className=" text-center sm:text-left text-[16px] sm:text-[24px]  mx-[px]  sm:mx-0">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <figure className="relative">
            <video  autoPlay playsInline muted loop  className="absolute  left-[10%] bottom-[20%] w-[80%] z-[1]">
              <source  src="videotv.mp4" type="video/mp4" />
            </video>
            <img src="tv.jpg" alt="" className="relative z-[2]" />


          </figure>
        </div>
      </div>
    </section>

    <section className="max-w-[100%]  bg-black  py-[34px] sm:py-[65px]  border-t-[8px] border-t-[#3b3838] ">

      <div className="max-w-[1300px] mx-auto px-[15px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-11 items-center   ">
          <figure className="relative  sm:order-1 order-2 ">
             <img src="mobile.jpg" alt="" className="relative z-[1]" />
             <div  className=" bottom-9 sm:w-[60%] w-[80%] absolute sm:left-[20%] left-[10%] border-[3px]  z-[2] bg-black grid grid-cols-[70%_auto] rounded-2xl border-[#3b3838]">
                <div className="grid grid-cols-[20%_auto] gap-10 items-center">
                  <img  src="boxshot.jpg" alt="" className="sm:my-[14px] sm:ml-[14px] "/>
                  <div className="text-white  ">
                      <h3>Stranger Things</h3>
                      <b className="text-blue-800">Downloading...</b>
                  </div>
                </div>
                <div>
                  <img src="download-icon.gif" alt="" className="rounded-2xl" />
                </div>
                
             </div>          
          </figure>
          <div className="text-white  sm:order-2 order-1  ">
               <h2 className="font-bold  sm:text-left text-[33px] sm:text-[45px] my-1 sm:my- sm:leading-[60px] leading-10 text-center">Download your shows to watch offline</h2>
               <p className=" text-center sm:text-left text-[16px] sm:text-[23px]  mx-[px]  sm:leading-[30px] sm:mx-0">Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-[100%]  bg-black  py-[34px] sm:py-[65px]  border-t-[8px] border-t-[#3b3838] ">

      <div className="max-w-[1300px] mx-auto sm:px-[160px] px-[10px] sm:pb-9 pb-11">
        <div className="grid grid-cols-1 sm:grid-cols-2  items-center   ">
          
          <div className="text-white    ">
               <h2 className="font-black  sm:text-left text-[33px] sm:text-[45px]  my-1 sm:mx-[56px] sm:leading-[60px]  text-center">Watch everywhere</h2>
               <p className=" text-center sm:text-left text-[16px] sm:text-[23px]  sm:mx-[57px]  sm:leading-[30px] ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-[100%]  bg-black  py-[34px] sm:py-[65px]  border-t-[8px] border-t-[#3b3838] ">

      <div className="max-w-[1300px] mx-auto px-[15px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-11 items-center   ">
          <figure className="relative  sm:order-1 order-2 ">
             <img src="kid.jpg" alt="" className="relative z-[1]" />
                      
          </figure>
          <div className="text-white  sm:order-2 order-1  ">
               <h2 className="font-bold  sm:text-left text-[33px] sm:text-[45px] my-1 sm:my- sm:leading-[60px] leading-10 text-center">Create profiles for kids</h2>
               <p className=" text-center sm:text-left text-[16px] sm:text-[23px]  mx-[px]  sm:leading-[30px] sm:mx-0">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>
    </section>


    <section className="max-w-[100%]  bg-black  py-[34px] sm:py-[60px]  border-t-[8px] border-t-[#3b3838] ">
          <div><AccordionDemo></AccordionDemo></div>
          <h1 className="text-[18px] sm:text-[21px] sm:pt-8 sm:pb-2 text-center text-white px-11 mb-5  sm:mb-3">Ready to watch? Enter your email to create or restart your membership.</h1>

          <div className="sm:max-w[700px] sm:max-w-[100%] mx-auto  ">
          <form action="" className="sm:grid-cols-2 sm:grid-cols-[55%_auto] grid grid-cols-1 items-baseline gap-3  ">
               <input type="email" name="email" id="" placeholder="Email address" className="border-[1px] h-[47px]  sm:h-[58px] mx-12 sm:mx-0 sm:ml-[470px] pl-4 sm:pl-4 rounded-md border-[#8d8686] bg-[rgba(41,38,38,0.47)] " />
               <Link href="" className="font-black text-white text-center   bg-[red] py-3 mt-1 sm:py-4 sm:mr-[520px] sm:mx-0 mx-[100px] rounded " >Get Started > </Link>
          </form>
          </div>
    </section> 
    <footer className="max-w-[100%]  bg-black  py-[34px] sm:pt-[70px]  border-t-[8px] border-t-[#3b3838] ">

      <div className="max-w-[1300px] mx-auto px-[15px]">
        
          <Link href="/contect" className="text-[14px] sm:text-[17px] sm:pt-8 sm:pb-2  text-[#FFFFFFB3] px-5 sm:px-11 mb-5  sm:mb-3 cursor-pointer underline">Questions? Contact us</Link>
          <div className="grid sm:grid-flow-col sm:grid-cols-4 grid-cols-2  ">
            <div className="text-[12px] sm:text-[15px] font-normal pt-6 sm:pt-6 sm:pb-2 text-[#FFFFFFB3] px-5 sm:px-11 mb-0   sm:mb-3 cursor-pointer underline">
              <ul className="pb-2 sm:pb-3"><Link href="">FAQ</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href="">Investor Relations</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href="">Privacy</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href="">Speed Test</Link></ul>

            </div>
            <div className="text-[12px] sm:text-[15px] font-normal pt-6 sm:pt-6 pb-0 sm:pb-2 text-[#FFFFFFB3] px-5 sm:px-11 mb-0  sm:mb-3 cursor-pointer underline">
              <ul className="pb-2 sm:pb-3"><Link href=" ">Help Center</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Jobs</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Cookie Preferences</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Legal Notices</Link></ul>
            </div>
            <div className="text-[12px] sm:text-[15px] font-normal sm:pt-6 pb-0  sm:pb-2 text-[#FFFFFFB3] px-5 sm:px-11 mb-5  sm:mb-3 cursor-pointer underline">
              <ul className="pb-2 sm:pb-3"><Link href=" ">Account </Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Ways to Watch </Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Corporate Information </Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Only on Netflix </Link></ul>
            </div>
            <div className="text-[12px] sm:text-[15px] font-normal pt-0 pb-0 sm:pt-6 sm:pb-2 text-[#FFFFFFB3] px-5 sm:px-11 mb-0  sm:mb-3 cursor-pointer underline">
              <ul className="pb-2 sm:pb-3"><Link href=" ">Media Center</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Terms of Use</Link></ul>
              <ul className="pb-2 sm:pb-3"><Link href=" ">Contact Us</Link></ul>
            </div>
          </div>
          <div className="  bg-black  text-[12px] sm:text-[15px] font-normal  sm:py-0 text-[#FFFFFFB3] px-5 sm:px-11 mb-2  sm:mb-0 ">
            <select name="english" id="" className=" text-[#FFFFFFB3]   bg-black sm:p-[6px_27px] rounded-[5px] border-[#9b9898c9] border-[1px]  focus:outline focus:ring focus:ring-[#FFFFFFB3]">
              <option value="">english</option>
            </select>
          </div>
          <div className="text-[12px] sm:text-[15px] font-normal sm:pt-5 sm:pb-0 text-[#FFFFFFB3] px-5 sm:px-11 mb-2  sm:mb-0 ">
            <h3 >Netflix Pakistan</h3>
          </div>
        

      </div>
    </footer>
    
    


    


    </main>
  )
}