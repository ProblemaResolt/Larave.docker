import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import useTypedPage from '@/Hooks/useTypedPage';
import AppLayout from '@/Layouts/AppLayout';
import Modal from "@/Pages/Components/Modal";
import { resolveConfig } from 'vite';

const Header = () => {
    return (
        <tr>
        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
            日付
        </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                状態
            </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                出勤
            </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                退勤
            </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                交通費
            </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                勤務時間
            </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                備考
            </th>
            <th className="px-6 py-3 font-semibold text-center capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">
                申請
            </th>
        </tr>
    )
};

const AttendanceSearch = () => {
    const page = useTypedPage();
    const array:any = page.props.attendance;
      console.log(array.created_at)
    
    return (
        <form className="max-w-4xl" role="form" action="#" method="get">
            <select name="example"
                className="g-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                {page.props.attendance.map((i: any) => {

                    const arrayslice = (i.created_at).slice(0,4);
                    return (
                        <option key={i.id.toString()} value={arrayslice}>{arrayslice}</option>
                    );
                })}
            </select>
            <select name="example"
                className="g-gray-50 w-4/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                {page.props.attendance.map((i: any) => {
                    const array = (i.created_at).slice(5,7);
                    return (
                        <option key={i.id.toString()} value={array}>{array}</option>
                    );
                })}
            </select>
            <button type="submit">送信</button>
        </form>);
}

const AttendanceList = (props: any) => {
    const page = useTypedPage();

    return (
        <tbody>
            {page.props.attendance.map((i: any) => {
                const years = (i.created_at).slice(0,4);
                const month = (i.created_at).slice(5,7);
                const days = (i.created_at).slice(8,10);
                const punch_in_time = (i.punch_in).slice(10,16);
                const punch_out_time = (i.punch_out).slice(10,16);
                return (
                    <tr key={i.id.toString()}>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{years}年{month}月{days}日</td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <div>
                                {
                                    i.status === 1 ?
                                        <span className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">出勤</span> : ''
                                            ||
                                            i.status === 2 ?
                                            <span className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">お休み</span> : ''
                                }
                            </div>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="font-semibold leading-tight text-size-xs text-slate-400">{i.punch_in === '1000-01-01 00:00:00' ? '休み' : punch_in_time}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="font-semibold leading-tight text-size-xs text-slate-400">
                                {i.punch_out === '1000-01-01 00:00:00' ? '休み' : punch_out_time
                                    || i.punch_in > i.punch_out ? punch_out_time : ''}
                            </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            {i.transportation_costs}
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            {i.working_time}
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            {i.note}
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <Modal />
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}
export default function Attendance(props: any) {
    const page = useTypedPage();
    return (
        <AppLayout
            title="Attendance"
            renderHeader={() => (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Attendance
                </h2>
            )}
        >
            <Head title="Attendance" />
            <div className="w-full px-6 py-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-10 overflow-x-auto">
                                    <AttendanceSearch />
                                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 table-auto">
                                        <thead className="align-bottom">
                                            <Header />
                                        </thead>
                                        <AttendanceList />
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
function post(arg0: string) {
    throw new Error('Function not implemented.');
}

