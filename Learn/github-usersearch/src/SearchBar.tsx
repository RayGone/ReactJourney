import type { FC } from "react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProp {
    onSearch(search: string): void
}

const SearchBar: FC<SearchBarProp> = ({onSearch}) => {
    return (<div className="md:w-[50%] w-[90%] flex flex-row gap-1 items-center justify-center rounded-full
            bg-gray-600 text-white shadow-lg shadow-green">
        <div className="flex gap-2 px-4 py-2 hover:pb-2 items-center hover:bg-gray-700 rounded-l-full">
            <label htmlFor="search" className="">User</label>
            <ChevronDownIcon className="w-4 font-black" />
        </div>
        <input id='search' placeholder="Search..." type='text' 
            className="grow p-2 focus:outline-none focus:ring-0 border-l-2 font-thin"
            onChange={(e) => onSearch(e.target.value)} />
        <div className="px-2 pr-3 py-2"
            onClick={(e) => {
                e.stopPropagation();
            }}>
            <MagnifyingGlassIcon className="w-5" />
        </div>
    </div>)
}

export default SearchBar;