import data from "~/data.json";

export default () => 
    <div className="lg:min-h-[50%] p-4 overflow-auto bg-white/80 dark:bg-gray-800/80 flex justify-center">
        <div className="lg:w-[65%] md:w-[90%] text-justify text-sm md:text-base text-shadow-sm "> 
          <div className="w-full p-2 text-justify text-base md:text-lg font-bold text-shadow-xs">{data.about_instructor.intro}</div>
            {
              data.about_instructor.description.map((description)=> <div key={description.slice(0,20)} dangerouslySetInnerHTML={{__html: description}}>
                
              </div>)
            }
        </div>
    </div>;