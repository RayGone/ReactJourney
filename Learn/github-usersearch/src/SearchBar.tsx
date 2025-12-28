import { useState, type FC } from "react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { fetchType } from "./useFetchGithub";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface SearchBarProp {
    onSearch(search: string): void
    searchType: fetchType
    setSearchType(searchType: fetchType): void
}

function capitalize(word: string): string{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const SearchBar: FC<SearchBarProp> = ({onSearch, searchType, setSearchType}) => {
    const [toggle, setToggle] = useState(false);
    const [searchWord, setSearchWord] = useState("");

    function onSearchTypeChange(st: fetchType){
        setToggle(t=>!t); 
        if(st!=searchType){
            setSearchType(st);
        }
    }

    return (<div className="md:w-[50%] w-[90%] flex flex-row gap-1 items-center justify-center rounded-full
            bg-gray-600 text-white shadow-xl shadow-green">
        <div className="relative">
            <div className="w-16 md:w-32 flex gap-2 px-4 py-2 hover:pb-2 items-center hover:bg-gray-700 rounded-l-full"
                onClick={()=> setToggle(t => !t)} >

                <label htmlFor="search" className="capitalize truncate">{searchType}</label>
                <ChevronDownIcon className="w-[70%] md:w-5 font-black" />
                
            </div>
            <div className={"top-10 bg-gray-700 rounded shadow-lg shadow-gray-500/90 "+ (toggle ? " z-20 absolute" : "hidden")}>
                <ul className={(toggle ? "" : "hidden") + " "}>
                    <li className="hover:bg-gray-800/20 px-3 py-2" onClick={()=>{onSearchTypeChange('users')}}>Users</li>
                    <li className="hover:bg-gray-800/20 px-3 py-2" onClick={()=>{onSearchTypeChange('repositories')}}>Repositories</li>
                </ul>
            </div>
        </div>
        <input id='search' placeholder={`Search ${capitalize(searchType)}...`} type='text' 
            className="grow p-2 focus:outline-none focus:ring-0 border-l-2 font-thin"
            value={searchWord}
            onChange={(e) => {setSearchWord(e.target.value); onSearch(e.target.value)}} />
        <div className="flex px-2 pr-3 py-2"
            onClick={(e) => {
                e.stopPropagation();
                onSearch(searchWord);
            }}>
            {!!searchWord.length && 
                <XMarkIcon className="w-7 mr-2 cursor-pointer rounded-full p-1 hover:shadow-md" 
                    onClick={(e)=>{
                        e.stopPropagation();
                        setSearchWord(""); 
                        onSearch("")}
                    } 
                />}
            <MagnifyingGlassIcon className="w-5" />
        </div>
    </div>)
}

export default SearchBar;