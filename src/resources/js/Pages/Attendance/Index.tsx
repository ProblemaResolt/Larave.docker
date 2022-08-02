import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import useTypedPage from '@/Hooks/useTypedPage';
import AppLayout from '@/Layouts/AppLayout';
import Button from '@/Jetstream/Button';

const Header = () => {
    return (
        <tr>
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
                Edit
            </th>
        </tr>
    )
};

const AttendanceList = (props: any) => {
    const page = useTypedPage();
    return (
        <tbody>
            {page.props.attendance.map((i: any) => {
                return (
                    <tr key={i.id.toString()}>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <div>{i.status}</div>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="font-semibold leading-tight text-size-xs text-slate-400">{i.panch_in}</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="font-semibold leading-tight text-size-xs text-slate-400">{i.panch_out}</span>
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
                            <Button className="font-semibold leading-tight text-size-xs text-slate-400"> Edit </Button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}




export default function Attendance(props: any) {
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
                                    <div className='mx-auto'>
                                        <Button type="button" className="mx-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5 border border-blue-500 hover:border-transparent rounded-full">Edit</Button>
                                    </div>
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
