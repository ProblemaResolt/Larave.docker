import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

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
                        <h2>ユーザー情報</h2>
                        <ul>
                            <li>
                                <dl>
                                    <dt>ID：</dt>
                                    <dd>{props.auth.user.id}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>name：</dt>
                                    <dd>{props.auth.user.name}</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>e-Mail:</dt>
                                    <dd>{props.auth.user.email}</dd>
                                </dl>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    );
}
