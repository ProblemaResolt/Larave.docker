import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const handleDelete = (id) => {
        destory(route("user.destroy", id), {
            preserveScroll: true,
        });
    };
    console.log(props.auth.user)
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
                                <th className="px-4 py-2">更新</th>
                                <th className="px-4 py-2">削除</th>
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
                            <Link href={route("user.edit", props.auth.user.id)}>
                                <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                                    更新
                                </button>
                            </Link>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold"
                                onClick={() => handleDelete(props.auth.user.id)
                            }>
                                削除
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                <th className="px-4 py-2">投稿日</th>
                                <th className="px-4 py-2">タイトル</th>
                                <th className="px-4 py-2">記事</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="border px-4 py-2">{props.blogs}</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2"></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
</div>

        </Authenticated>
    );
}
