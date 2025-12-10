import { useTheme } from "../hooks";
import {ThemeSwitch} from "../Components";
import { colorTransition } from "../styles";

export default function Header(){
    const {theme, setTheme} = useTheme();

    return <div className={`flex p-4 flex-row justify-start items-center w-full bg-blue-400 dark:bg-gray-900 gap-2 text-4xl w-full h-max-100 shadow-md 
                            shadow-gray-500 dark:shadow-gray-900 px-8 py-5 antialiased mb-2 sticky top-0 z-50 ${colorTransition}`}>
        <h2 className="text-2xl font-bold mr-auto text-shadow-md text-shadow-blue-800">Todo App</h2>
        <ThemeSwitch value={theme} onChange={()=>setTheme(t => t=='dark' ? 'light' : 'dark')}/>
    </div>
}