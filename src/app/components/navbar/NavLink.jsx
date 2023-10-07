'use client'
// import classeNames from '@/app/utils/classNames';
import classeNames from '../utils/classNames';
import Link from 'next/link';

import {usePathname} from 'next/navigation'

const NavLink = ({children, href, ex=false, activeClassName, ...props}) => {
    const path = usePathname();
    const active = ex ? path===href : path.startsWith(href);
    const classes = classeNames(props.className, active && activeClassName);
    if(classes){
        props.className=classes;
    }

    return (
        <Link href={href} {...props} >
            {children}
        </Link >
    );
};

export default NavLink;