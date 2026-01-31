import type { PropsWithChildren } from "react"

export default ({children, bgColor="bg-gray-200 dark:bg-gray-700", otherClass=""}: PropsWithChildren<{bgColor?: string, otherClass?: string}>) => 
    <div className={"w-full rounded-xl px-3 py-2 text-shadow-md border-l-3 dark:border-gray-100 rounded-l-none "+bgColor+" "+otherClass}>
        {children}
    </div>;