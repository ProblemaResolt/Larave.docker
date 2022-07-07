import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

export default function Dashboard(props) {
console.log(props.auth)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          <h2 className='py-5'>ユーザー情報</h2>
                                <ol className="grid grid-cols-2 gap-4">
                                    <li>名前:</li>
                                    <li>{props.auth.user.lastname}{props.auth.user.firstname}</li>
                                    <li>e-Mail:</li>
                                    <li>{props.auth.user.email}</li>
                                    <li>電話番号:</li>
                                    <li>{props.auth.user.phone}</li>
                                </ol>
                            <Button>編集</Button>
                            <Button>更新</Button>
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    );
}
