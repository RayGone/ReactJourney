import ExitL from "~/components/ExitL";
import data from "~/data.json";

export default () => <>
    <h1 className="text-center text-3xl font-bold  dark:text-white text-shadow-sm">Welcome to <wbr /><ExitL /><wbr /> <span className=" block text-nowrap">Driving School</span></h1>
    <br />
    <div className="text-justify text-base p-4 rounded bg-white/50 dark:bg-black/50 dark:text-white text-shadow-xs" dangerouslySetInnerHTML={{__html: data.page1.description}}>
        
    </div>
</>;