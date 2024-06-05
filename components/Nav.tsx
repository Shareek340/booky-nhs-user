"use client";


import Link from "next/link";
import { Redirect, redirect, usePathname } from "next/navigation";
const links =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Restaurant',
        path:'/'
    },
    {
        name:'Pool',
        path:'/'
    },
    {
        name:'Best deals',
        path:'/'
    },
    {
        name:'Contact',
        path:'/'
    },
];


const Nav = ({isUserAuthentication} :{isUserAuthentication:boolean}) => {
    const pathname = usePathname()
  return (
    <div>
        <ul className="flex flex-col lg:flex-row  gap-6">
            {links.map((link,index )=>{
                return <li key={index}>
                    <Link href={link.path} className="font-bold text-[13px] uppercase tracking-[3px] hover:text-accent-hover transition-all">{link.name}</Link>
                </li>
            })}
        </ul>
        {/*redirectind to the homepage if the user is not authenticated and path name "/dashboart" */}
        {!isUserAuthentication && pathname === '/dashboard' && redirect('/')}
    </div>
  )
}

export default Nav