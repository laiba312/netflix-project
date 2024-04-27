import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
   
<section> 
  <div className="max-w-[1300px] mx-auto px-[15px]">
    <h1 className="text-white font-bold text-center  text-[33px] sm:text-[45px]">Frequently Asked Questions</h1>
    <div className="py-[20px] ">
    <div className=" text-white">

        <Accordion type="single" collapsible className="w-full">
                   <div className="sm:bottom-11 bg-[#2d2d2d]  text-white">

                      <AccordionItem value="item-1">
                          <AccordionTrigger className="  p-[18px]  text-[19px] sm:text-[25px] relative  border-b-[2px] border-black hover:bg-[rgb(78,78,78)] hover:cursor-pointer duration-300 "><h3>What is Netflix?</h3></AccordionTrigger>
                          <AccordionContent className="text-[17px] sm:text-[22px] mb-3 py-8 px-7 sm:mb-3 sm:py-8 sm:px-7 sm:leading-[30px]"><p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>
                              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!.
                              </p></AccordionContent>
                        
 
                      </AccordionItem>
                    </div>
                    <div className="sm:bottom-11 bg-[#2d2d2d]  text-white">

                      <AccordionItem value="item-2">
                          <AccordionTrigger className="  p-[18px]  text-[19px] sm:text-[25px] relative  border-b-[2px] border-black hover:bg-[rgb(78,78,78)] hover:cursor-pointer duration-300 "><h3><span data-uia="nmhp-card-faq-accordion+what_to_watch_nft">How much does Netflix cost?</span></h3></AccordionTrigger>
                          <AccordionContent className="text-[17px] sm:text-[22px] mb-3 py-8 px-7 sm:mb-3 sm:py-8 sm:px-7 sm:leading-[30px]"><p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs&nbsp;250 to Rs&nbsp;1,100 a month. No extra costs, no contracts. </p></AccordionContent>
                        
 
                      </AccordionItem>
                    </div>
                    <div className="sm:bottom-11 bg-[#2d2d2d]  text-white">

                        <AccordionItem value="item-3">
                        <AccordionTrigger className="  p-[18px]  text-[19px] sm:text-[25px] relative  border-b-[2px] border-black hover:bg-[rgb(78,78,78)] hover:cursor-pointer duration-300 "><h3><span data-uia="nmhp-card-faq-accordion+what_to_watch_nft">Where can I watch?</span></h3></AccordionTrigger>
                        <AccordionContent className="text-[17px] sm:text-[22px] mb-3 py-8 px-7 sm:mb-3 sm:py-8 sm:px-7 sm:leading-[30px]"><p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                      </AccordionContent>
                      </AccordionItem>
                    </div>
                    <div className="sm:bottom-11 bg-[#2d2d2d]  text-white">

                      <AccordionItem value="item-4">
                          <AccordionTrigger className="  p-[18px]  text-[19px] sm:text-[25px] relative  border-b-[2px] border-black hover:bg-[rgb(78,78,78)] hover:cursor-pointer duration-300 "><h3>How do I cancel?</h3></AccordionTrigger>
                          <AccordionContent className="text-[17px] sm:text-[22px] mb-3 py-8 px-7 sm:mb-3 sm:py-8 sm:px-7 sm:leading-[30px]"><p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p></AccordionContent>
                        
 
                      </AccordionItem>
                    </div>
                    <div className="sm:bottom-11 bg-[#2d2d2d]  text-white">

                      <AccordionItem value="item-5">
                          <AccordionTrigger className="  p-[18px]  text-[19px] sm:text-[25px] relative  border-b-[2px] border-black hover:bg-[rgb(78,78,78)] hover:cursor-pointer duration-300 "><h3>What can I watch on Netflix?</h3></AccordionTrigger>
                          <AccordionContent className="text-[17px] sm:text-[22px] mb-3 py-8 px-7 sm:mb-3 sm:py-8 sm:px-7 sm:leading-[30px]"><p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p></AccordionContent>
                        
 
                      </AccordionItem>
                   </div>
                   <div className="sm:bottom-11 bg-[#2d2d2d]  text-white">

                      <AccordionItem value="item-6">
                          <AccordionTrigger className="  p-[18px]  text-[19px] sm:text-[25px] relative  border-b-[2px] border-black hover:bg-[rgb(78,78,78)] hover:cursor-pointer duration-300 "><h3>Is Netflix good for kids?</h3></AccordionTrigger>
                          <AccordionContent className="text-[17px] sm:text-[22px] mb-3 py-8 px-7 sm:mb-3 sm:py-8 sm:px-7 sm:leading-[30px]"><p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/><br/>
                          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p></AccordionContent>
                        
 
                      </AccordionItem>
                   </div>
  

          
         
        </Accordion>
</div>
</div>
</div>

</section>
     

  )
}
