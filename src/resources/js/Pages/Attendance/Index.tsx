import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Button from '@/Jetstream/Button';
import Data from '@/Pages/Attendance/Data/data.json';

type Props = {
    "id": number,
    "user_id": number,
    "note": object,
    "transportation_costs": object,
    "panch_in": object
    "panch_out": object,
    "working_time":object,
    "break_time":object,
    "created_at": object,
    "updated_at": object
  }

const data = Data;

const objlist = data.attendance.map((i) => {
    return (
        <tr>
            <td key={i.id} className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
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
              {i.note}
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
            <Button className="font-semibold leading-tight text-size-xs text-slate-400"> Edit </Button>
            </td>
        </tr>
    );
  });

  console.log(objlist)

export default function Attendance() {
    return (
      <AppLayout
        title="Attendance"
        renderHeader={() => (
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Attendance
          </h2>
        )}
      >
        <div className="w-full px-6 py-6 mx-auto">

            <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-2 overflow-x-auto">

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-center align-middle">
                            <div>
                                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-10 rounded-full">出勤</button>
                            </div>
                            <div>
                                <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-10 px-10  border border-blue-500 hover:border-transparent rounded-full">退勤</button>
                            </div>
                            <div>
                                 合計勤務時間　18:00
                            </div>
                            <div className='align-middle'>
                                規定休憩時間　1:00
                            </div>
                            <div>
                                 <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Export</button>
                            </div>
                        </div>
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 table-auto">
                            <thead className="align-bottom">
                            <tr>
                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">状態</th>
                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">出勤</th>
                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">退勤</th>
                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">交通費精算</th>
                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">備考</th>
                                <th className="px-6 py-3 font-semibold text-center capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70">Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                             {objlist}
                            </tbody>
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
