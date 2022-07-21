import React from 'react';
import useTypedPage from '@/Hooks/useTypedPage';

export default function Welcome(props:any) {
    const page = useTypedPage();

  return (
    <>
        <article className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

                <div className="p-4 md:p-12 text-center lg:text-left">
                    <h1 className="text-3xl font-bold pt-8 lg:pt-0">{page.props.user.name}</h1>
                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    Joined in {page.props.user.created_at}
                    </p>
                </div>

            </div>
            <div className="w-full lg:w-2/5">
                <img src={page.props.user.profile_photo_url} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                </div>
        </article>
    </>
  );
}
