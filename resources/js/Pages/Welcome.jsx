import React from 'react';
import {Head, Link} from '@inertiajs/inertia-react';
import Footer from '@/Components/Footer';
import Header from "@/Components/Header";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome"/>

            <Header user={props.auth.user}/>

            <div className="container mx-auto">

                <div className="text-center m-10">
                    <h1 className="text-2xl md:text-3xl">Welcome to Soundexperts</h1>
                </div>

                <div className="flex flex-col md:flex-row mx-4 md:mx-12 xl:mx-18 gap-6 my-6">
                    <div className="md:w-1/2 flex flex-row border-2 rounded-lg border-yellow border-opacity-90 p-4">
                        <div
                            className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold mb-3">Customer</h2>
                            <p className="mb-4">I'm a customer and looking for a professional help for
                                my project.</p>
                            <Link href={route('login')} className="mt-3 inline-flex items-center mt-auto">
                                Find professional
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-row border-2 rounded-lg border-yellow border-opacity-90 p-4">
                        <div
                            className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="2">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold mb-3">Professional</h2>
                            <p className="mb-4">I'm a professional and like to offer my services.</p>
                            <Link href={route('login')} className="mt-3 inline-flex items-center mt-auto">Look for jobs
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    );
}
