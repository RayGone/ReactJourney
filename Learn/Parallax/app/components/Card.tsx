import type { PropsWithChildren } from "react";

export default ({children, title, className=""}: PropsWithChildren<{title: string, className?: string}>) => <div className={"w-[80%] md:w-[300px] bg-gray-100 dark:bg-gray-900 shadow-sm hover:shadow-lg dark:shadow-gray-700 py-8 px-4 border-t-5 "+className}>
    <h2 className="text-3xl font-bold text-center text-shadow-sm">{title}</h2>
    <hr />

    {children}
</div>