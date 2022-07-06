import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Header from '@/Layouts/Header';
import Main from '@/Layouts/Main';
import Footer from '@/Layouts/Footer';

export default function Welcome(props) {
    return (
        <>
            <Head title="Home" />
            <article className="">
            <Header />
            <Main />
            <Footer />
                <h1 className="">
                    Nts japan ltd.
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </h1>

                <div className="">

                    <div className="">
                        <div className="">
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
