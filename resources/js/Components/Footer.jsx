import React from 'react';
import {Link} from "@inertiajs/inertia-react";

export default function Footer() {
    return (
        <footer className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
            <div className="text-center py-4">
                © 2022 Copyright:
                <Link href="/" className="pl-2">
                    Soundexperts
                </Link>
            </div>
            <div className="flex text-sm">
                <Link href={route('about')} className="px-3 border-r">
                    About us
                </Link>
                <Link href={route('faq')} className="px-3 border-r">
                    FAQ
                </Link>
                <Link href={route('contact')} className="pl-3">
                    Contact
                </Link>
            </div>
        </footer>
    );
}
