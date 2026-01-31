import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faCar } from "@fortawesome/free-solid-svg-icons";
import Card from "~/components/Card";
import { Link } from "react-router";
import SubCard from "~/components/SubCard";
import { scrollToElement } from "~/scripts";
import PageTitle from "~/components/PageTitle";

export default () => 
  <div className="w-full dark:bg-gray-900">
    <div id="package" className="flex flex-col items-center dark:bg-gray-900 snap-start scroll-mt-20">
      <br />
      <PageTitle title="Pricing and Packages" />
      <br />
      <div className="w-full flex flex-row flex-wrap justify-center gap-5 md:gap-3">
        <Card className="" title="Normal Pricing">
          <h4 className="text-xl underline my-3 font-bold"><FontAwesomeIcon icon={faCar} className="text-gray-500/80" /> Driving Lesson</h4>
          <SubCard >
            <p>Weekdays:<br /><span className="text-3xl font-bolder px-3">$80/</span>hour</p>
          </SubCard><br />
          <SubCard>
            <p>Weekends:<br /><span className="text-3xl font-bolder px-2">$90/</span>hour</p>
          </SubCard>
          <br />
          <h4 className="text-xl underline my-3 font-bold"><FontAwesomeIcon icon={faCar} className="text-gray-500/80" /> Car Hire</h4>
          <span className="text-base">Available only for Driving Test</span>
          <SubCard>
            <p><span className="text-3xl font-bolder pl-3">$145/</span>hour</p>
          </SubCard>          
        </Card>   

        <Card className="border-green-500 text-justify  text-sm text-shadow-md" title="Learner Package">
          <div className="my-2 bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-shadow-sm">
            Gain valuable experience, build confidence for your driving test, and progress your logbook hours with ease. 
          </div>
          <div className="my-1 bg-gray-200 dark:bg-gray-700 rounded-xl p-2  text-shadow-sm">            
            By choosing structured driving lessons with EXIT-L, every 1 hour of professional instruction counts as 3 hours in your logbook—up to a maximum of 30 hours for the first 10 hours of lessons.
          </div>
          <div className="my-1 bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-shadow-sm">             
            This approach helps you develop safe, consistent driving habits while accelerating your journey toward getting licensed.
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-shadow-sm">
            For pricing information, feel free to get in touch.
          </div>
          <br />
          <Link to="#contact" className="block md:hidden p-2 bg-slate-600 rounded text-white text-center" onClick={()=>scrollToElement("#contact")}>Contact</Link>
        </Card>

        <Card className="border-rose-500" title="Express Package">
          <div className="my-2">
            It is useful for International drivers who have 3 or more years of driving experience.
          </div>

          <h4 className="text-xl underline my-3 font-bold"><FontAwesomeIcon icon={faTruckFast} className="text-rose-500/80" /> Driving Lesson</h4>
        
          <ul className="list-disc pl-1 mb-2  text-shadow-sm">
            <li>3 Lessons/package</li>
            <li>Exam-Test Day Booking</li>
          </ul>

          <SubCard bgColor="bg-rose-700/30 dark:bg-rose-500/80">
            <p><span className="text-3xl font-bolder pl-3">$345/</span>package</p>
          </SubCard><br />   

          <div className="text-sm bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-justify text-shadow-sm">
            Full Introduction provided on how the <span className="font-bold">NSW Driving Test</span> is conducted.
          </div>   
        </Card>

        <Card className="border-violet-500" title="Test Day Package">
          <h4 className="text-xl underline my-3 font-bold"><FontAwesomeIcon icon={faCar} className="text-violet-500/80" />Driving Test</h4>
          <SubCard bgColor="bg-violet-700/30 bg-violet-500/80">
            <p><span className="text-3xl font-bolder pl-3">$185/</span>day</p>
          </SubCard><br />
          
          <div className="text-sm bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-justify my-2 text-shadow-sm">
            Pick-up 1hr prior to test start Time.
          </div>  
          <div className="text-sm bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-justify my-2 text-shadow-sm">
            45 min pre-test warm up.
          </div>  
          <div className="text-sm bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-justify my-2 text-shadow-sm">
            Use of instructors vehicles to sit the test.
          </div>  
          <div className="text-sm bg-gray-200 dark:bg-gray-700 rounded-xl p-2 text-justify my-2 text-shadow-sm">
            Drop-off after the test result is received.
          </div>           
        </Card>     
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>;