import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';
import Footer from '@/Layouts/Footer';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">ユーザー情報</h2>}
        >
            <Head title="ユーザー情報" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                <th className="px-4 py-2">名前</th>
                                <th className="px-4 py-2">e-Mail</th>
                                <th className="px-4 py-2">電話番号</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="border px-4 py-2">{props.auth.user.lastname}{props.auth.user.firstname}</td>
                                <td className="border px-4 py-2">{props.auth.user.email}</td>
                                <td className="border px-4 py-2">{props.auth.user.phone}</td>
                                </tr>
                            </tbody>
                            </table>
                            <Button className='mt-5'>編集</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </Authenticated>
    );
}
