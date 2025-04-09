

export const TechIcon = ({component}: {component:React.ElementType}) => {
    const Component = component;
    return (
    <>
        <Component className="size-10 fill-[url(#tech-icon-gradient)] from-slate-300 to-blue-500"/>
        <svg className="size-0 absolute">
            <linearGradient id="tech-icon-gradient">
                <stop offset="0%" stopColor="#cbd5e1"/>
                <stop offset="100%" stopColor="#3b82f6"/>
            </linearGradient>
        </svg>
    </>

    );
}