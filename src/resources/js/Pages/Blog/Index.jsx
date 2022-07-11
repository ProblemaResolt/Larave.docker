import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";

import Button from "@/Components/Button";
import { Link } from "@inertiajs/inertia-react";

export default function Index(props) {
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        destory(route("blog.destroy", id), {
            preserveScroll: true,
        });
    };
    const reversedArr = [...props.blogs].reverse()

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blog
                </h2>
            }
        >
            <Head title="Blog Index" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div>
                                    <Link href={route("blog.create")}>
                                        <Button type="button">新規作成</Button>
                                    </Link>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>作成日</th>
                                            <th>修正日</th>
                                            <th>タイトル</th>
                                            <th>コンテンツ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {reversedArr.map((blog) => {
                                        return (
                                                <tr key={blog.id}>
                                                    <td className="border px-4 py-2">
                                                        {blog.id}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {blog.created_at}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {blog.updated_at}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {blog.title}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        {blog.content}
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                        <Link href={route("blog.edit", blog.id)}>
                                                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                                                                更新
                                                            </button>
                                                        </Link>
                                                    </td>
                                                    <td className="border px-4 py-2">
                                                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold"
                                                        onClick={() => handleDelete(blog.id)
                                                    }>
                                                        削除
                                                    </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}