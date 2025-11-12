import Header from "./Components/Header";

export default function Layout({children}){
    const details = <span className="font-bold">Create/Select a task.</span>

    return <div className="w-[100dvw] h-[100dvh] text-start">
        <Header></Header>
        <div  id="body" className="w-full block px-2 box-border lg:shadow-sm shadow-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-0 md:gap-5">
                <div className="h-[88vh] block col-span-1 md:col-span-2 lg:col-span-1 overflow-auto md:shadow-[8px_0px_10px_-10px] shadow-blue-300 md:border-r-1 border-white">
                    {children}
                </div>

                <div className="col-span-1 hidden md:block md:col-span-2 lg:col-span-3 p-2">
                    {details}
                </div>
            </div>
        </div>
    </div>;
}