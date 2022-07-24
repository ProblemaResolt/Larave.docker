import React from 'react';
import useTypedPage from '@/Hooks/useTypedPage';
import Button from '@/Jetstream/Button';

export default function Profile(props:any) {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-center align-middle">
                            <div>
                                <Button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded-full">出勤</Button>
                            </div>
                            <div>
                                <Button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5  border border-blue-500 hover:border-transparent rounded-full">退勤</Button>
                            </div>
                            <div>
                                 合計勤務時間　18:00
                            </div>
                            <div className='align-middle'>
                                規定休憩時間　1:00
                            </div>
                        </div>

            </div>
            <div className="w-full lg:w-2/5">
                <img src={page.props.user.profile_photo_url} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                </div>
        </article>
    </>
  );
}
