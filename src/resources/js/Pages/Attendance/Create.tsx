import React,{useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";
import Button from '@/Jetstream/Button';
const Create = () => {
    const { data, setData, errors, post, put } = useForm({
        id: "",
        user_id: "",
        note: "",
        transportation_costs: "",
        panch_in: "",
        panch_out: "",
        working_time: "",
        break_time: "",
        created_at: "",
        updated_at: ""
    });
    function attendanceHandleSubmit(e: any) {
        e.preventDefault();
        post(route("attendance/punchin"));
    }
    function leavingHandleSubmit(e: any) {
        e.preventDefault();
        post(route("attendance/punchout"));
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 text-center align-middle py-5 xl:py-5">
            <div className='py-2'>
                <form name="createForm" onSubmit={attendanceHandleSubmit}>
                    <Button name="panch_in" type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-20  border border-blue-500 hover:border-transparent rounded-full">出勤</Button>
                    <span className="text-red-600">
                        {errors.panch_in}
                    </span>
                </form>
            </div>
            <div className='py-2'>
                <form name="createForm" onSubmit={leavingHandleSubmit}>
                    <Button name="panch_in" type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5  border border-blue-500 hover:border-transparent rounded-full">退勤</Button>
                    <span className="text-red-600">
                        {errors.panch_out}
                    </span>
                </form>
            </div>
            <div className='py-2'>
                <Button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5  border border-blue-500 hover:border-transparent rounded-full">休み</Button>
            </div>
            <div className='py-2'>
                <Button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5  border border-blue-500 hover:border-transparent rounded-full">有給申請</Button>
            </div>
        </div>

    );
};

export default Create;
