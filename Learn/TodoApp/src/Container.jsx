export default function Container({children}){
    return <div className="w-[100dvw] h-[100dvh] text-start select-none">
       {children}
    </div>;
}