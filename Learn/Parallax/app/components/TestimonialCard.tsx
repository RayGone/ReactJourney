import { faUser, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";



export default ({iconUrl="",name, testimony, rating=5, review_url=""}: {iconUrl?: string, name:string, testimony: string, rating?: number, review_url?: string}) => {
    const r = Math.abs(rating) >= 5 ? 5 : Math.abs(rating);
    let stared: number[] = new Array(r);
    stared.fill(0, 0, r);
    let unstared: number[] = new Array(5-r);
    unstared.fill(0, 0, 5-r);

    function openTarget(url: string){
        if(url.includes("https://maps.app.goo.gl")){
            const newTab = window.open(url, "_blank");
        }
    }

    return <div className={"min-w-[250px] w-[250px] md:w-[300px] md:min-w-[300px] flex flex-col gap-1 bg-gray-800/20 rounded p-3 shadow-sm hover:shadow-md shadow-gray-800 dark:shadow-black" + (!!review_url ? " cursor-pointer" : "")} onClick={()=>{openTarget(review_url)}}>
        <div className="flex flex-row flex-no-wrap items-center gap-2">
            <div className="w-[50px] h-[50px] rounded-full border-1 flex flex-row justify-center items-center">
                {!!iconUrl && <img className="w-full h-full rounded-full" src={iconUrl} alt={name+" thumbnail icon"} />}
                {!iconUrl && <FontAwesomeIcon icon={faUser} size="2x"/>}
            </div>
            <span className="font-bold text-sm text-shadow-sm">{name}</span>
        </div>
        <div className="min-h-[70px] my-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-xs text-shadow-sm capitalize overflow-hidden text-justify">
            {testimony}
        </div>
        <div>
            {stared.map(()=> <FontAwesomeIcon key={Math.random().toLocaleString()+name+Math.random().toLocaleString()} icon={faStarSolid} size="1x" className="text-yellow-500" />)}
            {unstared.map(()=> <FontAwesomeIcon key={"_"+Math.random().toLocaleString()+name} icon={faStar} size="1x" className="text-yellow-500" />)}
        </div>
        <span className="text-xs underline text-blue-400">Click to check full review.</span>
    </div>;
}