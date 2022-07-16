import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Header(prop) {
    return (
        <nav className="container mx-auto flex justify-between items-center p-4">
            <Link href="/">
                <ApplicationLogo/>
            </Link>
            <div className="flex justify-between text-sm font-bold">
                {prop.user ? (
                    <div className="flex">
                        <Link href={route('dashboard')} className="text-sm underline">
                            Dashboard
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link href={route('login')} className="pr-2 border-r">
                            Log in
                        </Link>

                        <Link href={route('register')} className="pl-2">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
