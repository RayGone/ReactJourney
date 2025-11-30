export default function Header({title="Todo App"}){
    return (<div className="text-4xl w-full h-max-100 shadow-md shadow-gray-900 px-8 py-5 antialiased mb-2">
        <h2 className="font-bold text-white-700 text-shadow-md text-shadow-blue-800">{title}</h2>
    </div>);
}