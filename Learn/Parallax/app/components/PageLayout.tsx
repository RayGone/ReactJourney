import type { PropsWithChildren } from "react";
import { NavBar } from "./NavBar";

export default ({children}: PropsWithChildren) => <div className="w-full h-[100dvh] overflow-auto dark:bg-gray-900 min-w-[350px]">
        <NavBar />
        {children}
    </div>