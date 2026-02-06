import type { PropsWithChildren } from "react";
import Brand from "./Brand";

export default ({children}: PropsWithChildren) => <div className="w-[100vw] h-[100vh] bg-[url('/exitl.png')] bg-cover">
    <div className="w-full h-full absolute bg-white/60 dark:bg-black/60 top-0 left-0">
        <div className="w-full h-full py-10 flex flex-col flex-wrap justify-start items-center ">
            <div className="bg-white/80 dark:bg-black/80 p-10 shadow-md"><Brand size="3rem" /></div>
            {children}
        </div>
    </div>
</div>