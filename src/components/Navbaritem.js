'use client'

import Link from "next/link"
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const Navbaritem = ({ title, param }) => {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <NavbarLink title={title} param={param} />
            </Suspense>
        </div>
    );
}

const NavbarLink = ({ title, param }) => {
    const search = useSearchParams();
    const genre = search.get('genre');

    return (
        <Link
            className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg ' : ''}`}
            href={`/?genre=${param}`}
        >
            {title}
        </Link>
    );
}

export default Navbaritem;
