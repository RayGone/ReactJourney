import { ArrowPathIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import './App.css'
import SearchBar from './SearchBar'
import { useFetchGithub } from './useFetchGithub'
import type { Repo, User } from './interfaces';

function App() {
  const {data, fetchData, getType, changeGetType, isloading, isNext} = useFetchGithub();

  return (<div className='w-[100dvw] h-[100dvh] flex flex-col items-center justify-center gap-3 select-none bg-gray-600'>
    <div className='bg-gray-200 rounded-full'>
      <img src='https://docs.github.com/assets/cb-345/images/site/favicon.png' alt='github icon' />
    </div>
    <SearchBar 
      onSearch={(keyword) => {
        fetchData(keyword)
      }}
      searchType={getType}
      setSearchType={(st)=>changeGetType(st)} />
    <div className='h-[50%]  md:w-[50%] w-[80%] text-white'>
      {isloading && <span className='w-full flex justify-center z-50'><ArrowPathIcon className='w-8 h-8 animate-spin'>The data is Loading</ArrowPathIcon></span>}
      <div className='h-full w-full overflow-auto flex flex-col gap-1'>
        {(getType=="users" && data) && 
          (data as User[]).map((item)=><span 
            key={`${item.id}_` + item.node_id}
            onClick={() => {
              window.open(item.html_url as string, "_blank")
            }}
            className='flex flex-row items-center gap-2 p-2 hover:bg-slate-700 hover:rounded hover:shadow-lg border-b-1 border-slate-700'>
            <img src={item?.avatar_url} alt="Github Avatar" className='w-9 h-9 rounded-full'/>
            <span className='font-thin'>{item.login}</span>
          </span>)
        }
        
        {(getType!=="users" && data) && 
          (data as Repo[]).map((item)=><span 
            key={`${item.id}_` + item.node_id}
            onClick={() => {
              window.open(item.html_url as string, "_blank")
            }}
            className='flex flex-col gap-1 p-2 hover:bg-slate-700 hover:rounded hover:shadow-lg border-b-1 border-slate-700'>
              <span className='font-bold bg-gradient-to-r from-slate-800/50 to-gray-600/10 to-30% rounded-full px-6 py-2'>{item?.name}</span>  
              <span className='text-xs font-thin px-6 pb-2'>{item.description}</span>
              <div className='flex flex-row items-center gap-2'>    
                <img src={item?.owner?.avatar_url as string} alt="Github Avatar" className='w-9 h-9 rounded-full'/>
                <span className='font-thin truncate capitalize'>{item.owner?.login}</span>           
              </div>
          </span>)
        }
      </div>
    </div>
    {isNext && 
      <span 
        onClick={()=>{fetchData("<next>")}}
        className='md:w-[50%] w-[80%] text-white flex justify-center p-2 shadow-slate-500/30 shadow-lg __shadow-[_-3px_-3px_10px_5px_rgba(168, 143, 143, 0.2)] hover:shadow-xl'>
        <ChevronDoubleDownIcon className='w-5 text-slate-200' />
    </span>}
  </div>)
}

export default App
