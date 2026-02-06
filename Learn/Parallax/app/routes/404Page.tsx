import PageSuspense from "~/components/PageSuspense";

export default () => <PageSuspense>
    <p className="text-6xl mt-10 text-shadow-md text-red-500 p-10 bg-white dark:bg-black shadow-md rounded">
        <u className="text-4xl">Error 404</u><br />
        <strong className="font-bolder">Page not found!!</strong><br />
        <small className="text-base">The page you are trying to access doesn't exist or has been removed.</small><br />
        <a href="/" className="my-5 p-3 text-base active:text-sm border-1 bg-gray-900 hover:bg-gray-950 rounded-2xl shadow-sm hover:shadow-md active:shadow-md border-green-700 shadow-rose-700/90 cursor-pointer font-bold text-white">Go Back Home</a>
    </p>
</PageSuspense>