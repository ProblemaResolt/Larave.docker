import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

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
    function handleSubmit(e:any) {
        e.preventDefault();
        post(route("attendance/punchin"));
    }
    function handleSubmit2(e:any) {
        e.preventDefault();
        post(route("attendance/punchout"));
    }

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <button name="panch_in" type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition mx-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5 border border-blue-500 hover:border-transparent rounded-full">出勤</button>
                        <span className="text-red-600">
                            {errors.panch_in}
                        </span>
                    </form>
                    <form name="createForm" onSubmit={handleSubmit2}>
                        <button name="panch_in" type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition mx-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-5 border border-blue-500 hover:border-transparent rounded-full">退勤</button>
                        <span className="text-red-600">
                            {errors.panch_out}
                        </span>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Create;
