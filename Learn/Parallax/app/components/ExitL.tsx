import type { FC } from "react";

interface Props{
    size?: string
}

const ExitL : FC<Props> = ({size='2rem'}) => <div className="inline-block select-none">
    <span className={`e`} style={{fontSize: size}}>E</span>
    <span className={`e`} style={{fontSize: size}}>X</span>
    <span className={`e`} style={{fontSize: size}}>I</span>
    <span className={`e`} style={{fontSize: size}}>T</span>
    <span style={{color: 'red', fontSize: size}} className={``}>-</span>
    <span className={`l`} style={{fontSize: size}}>L</span>
</div>;

export default ExitL;