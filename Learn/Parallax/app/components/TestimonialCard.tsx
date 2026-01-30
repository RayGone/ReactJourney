import { faUser, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";



export default ({iconUrl="",name, testimony, rating=5}: {iconUrl?: string, name:string, testimony: string, rating?: number}) => {
    const r = Math.abs(rating) >= 5 ? 5 : Math.abs(rating);
    let stared: number[] = new Array(r);
    stared.fill(0, 0, r);
    let unstared: number[] = new Array(5-r);
    unstared.fill(0, 0, 5-r);

    return <div className="w-[350px] min-w-[350px] h-full flex flex-col gap-1 bg-gray-800/20 rounded p-3 shadow-sm hover:shadow-md shadow-gray-800 dark:shadow-black">
        <div className="flex flex-row flex-no-wrap items-center gap-2">
            <div className="w-[60px] h-[60px] rounded-full border-1 flex flex-row justify-center items-center">
                {!!iconUrl && <img className="w-full h-full rounded-full" src={iconUrl} alt={name+" thumbnail icon"} />}
                {!iconUrl && <FontAwesomeIcon icon={faUser} size="2x"/>}
            </div>
            <span className="font-bold text-shadow-sm">{name}</span>
        </div>
        <div className="my-2 h-[72px] bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-sm text-shadow-sm capitalize line-clamp-3">
            {testimony}
        </div>
        <div>
            {stared.map(()=> <FontAwesomeIcon icon={faStarSolid} size="2x" className="text-yellow-500" />)}
            {unstared.map(()=> <FontAwesomeIcon icon={faStar} size="2x" className="text-yellow-500" />)}
        </div>
    </div>;
}