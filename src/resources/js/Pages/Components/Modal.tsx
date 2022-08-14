import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import useTypedPage from '@/Hooks/useTypedPage';

export default function Modal() {
    const page = useTypedPage();
    let values: {
        note: string;
        working_time: string; updated_at: string; user_id: string; transportation_costs: string; punch_out: string; created_at: string; punch_in: string; id: string; break_time: string
    };
    let setValues: (value: (((prevState: { note: string; working_time: string; updated_at: string; user_id: string; transportation_costs: string; punch_out: string; created_at: string; punch_in: string; id: string; break_time: string }) => { note: string; working_time: string; updated_at: string; user_id: string; transportation_costs: string; punch_out: string; created_at: string; punch_in: string; id: string; break_time: string }) | { note: string; working_time: string; updated_at: string; user_id: string; transportation_costs: string; punch_out: string; created_at: string; punch_in: string; id: string; break_time: string })) => void;
    [values, setValues] = useState({
        "id": "",
        "user_id": "",
        "note": "",
        "transportation_costs": "",
        "punch_in": "datetime-local",
        "punch_out": "datetime-local",
        "working_time": "",
        "break_time": "",
        "created_at": "",
        "updated_at": ""
    });

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        Inertia.post('/attendance/edit', values)
    }
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                申請
            </button>
            {showModal ?
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto max-w-screen-md w-screen contenier">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        各種申請
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span
                                            className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            閉じる
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="max-w-6xl contenier">
									<form className="w-full" onSubmit={handleSubmit}>
                                    <div className="md:flex md:items-center my-6">
                                        <div className="md:w-1/6">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                出勤
                                            </label>
                                        </div>
                                        <div className="md:w-5/6 pr-3">
                                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
												id="inline-full-name"  type="datetime-local"
												value={page.props.attendance.punch_in} onChange={handleChange}
											 />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/6">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                退勤
                                            </label>
                                        </div>
                                        <div className="md:w-5/6 pr-3">
                                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
												id="inline-full-name"  type="datetime-local"
												value={page.props.attendance.punch_out} onChange={handleChange}
											 />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/6">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
											交通費申請
                                            </label>
                                        </div>
                                        <div className="md:w-5/6 pr-3">
                                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
												id="inline-full-name" type="text"
												value={page.props.attendance.transportation_costs} onChange={handleChange}
											 />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/6">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
											備考
                                            </label>
                                        </div>
                                        <div className="md:w-5/6 pr-3">
                                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
												id="inline-full-name"
												value={page.props.attendance.note} onChange={handleChange}
											 />
                                        </div>
                                    </div>
                                        {/*footer*/}
                                        <div
                                            className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button type="submit"
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                : null}
        </>
    );
}
