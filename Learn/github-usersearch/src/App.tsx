import { ArrowPathIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import './App.css'
import SearchBar from './SearchBar'
import { useFetchGithub } from './useFetchGithub'

function App() {
  const {data, fetchData, isloading, isNext} = useFetchGithub();

  return (<div className='w-[100dvw] h-[100dvh] flex flex-col items-center justify-center gap-3 select-none bg-gray-600'>
    <div className='bg-gray-200 rounded-full'>
      <img src='https://docs.github.com/assets/cb-345/images/site/favicon.png' alt='github icon' />
    </div>
    <SearchBar onSearch={(keyword) => {
      fetchData(keyword)
    }} />
    <div className='h-[50%]  md:w-[50%] w-[80%] text-white'>
      {isloading && <span className='w-full flex justify-center z-50'><ArrowPathIcon className='w-8 h-8 animate-spin'>The data is Loading</ArrowPathIcon></span>}
      <div className='h-full w-full overflow-auto flex flex-col gap-2'>
        {data && 
          data.map((item)=><span 
            key={item.id as string + item.node_id as string}
            onClick={() => {
              window.open(item.html_url as string, "_blank")
            }}
            className='flex flex-row items-center gap-2 p-2 hover:bg-slate-700'>
            <img src={item.avatar_url as string} alt="Github Avatar" className='w-9 h-9 rounded-full'/>
            <span className='font-thin'>{item.login}</span>
          </span>)
        }
      </div>
    </div>
    {isNext && 
      <span 
        onClick={()=>{fetchData("<next>")}}
        className='md:w-[50%] w-[80%] text-white flex justify-center p-2 shadow-slate-500/50 shadow-lg __shadow-[_-3px_-3px_10px_5px_rgba(168, 143, 143, 0.2)] text-shadow-md text-shadow-blue-500/20'>
        <ChevronDoubleDownIcon className='w-4' />
    </span>}
  </div>)
}

export default App
