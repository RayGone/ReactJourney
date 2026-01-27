import type { FC, PropsWithChildren } from "react";
import ExitL from "./ExitL";

interface Props{
    className?: string
}

const GlassCard : FC<PropsWithChildren<Props>> = ({children, className=''}) => <div className={`glass-card size-fit ${className}`}>
    {children}
</div>

export default GlassCard