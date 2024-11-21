"use client"
import { usePathname } from 'next/navigation';
import style from './NavLink.module.css';
import Link from 'next/link';

const NavLink =({href, name}:{href:string, name:string})=>{
    const path =usePathname();
    return <Link href={href} className={`${path===href ? style.activeLink:''}  ${style.headerLink} font-lg`}>
        {name}
    </Link>

}

export default NavLink