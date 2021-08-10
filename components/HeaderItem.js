

function HeaderItem({title,Icon}) {
    return (
        <div className="hover:animate-bounce group flex flex-col items-center cursor-pointer  w-12 sm:20 hover:text-white over:-translate-y-0.5 transition-all duration-150 group ">
            <Icon className="  h-8 mb-1 "/>
            <p className=" opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
