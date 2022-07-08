import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Footer from '@/Layouts/Footer';

export default function Rulebook(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">就業規則</h2>}
        >
<Head title="就業規則" />

<div className="py-12">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
            <h2>第1章　総則</h2>
<p>

第１条　この規則は、　○○医院（以下「医院」という。）に勤務する職員の就業に関する事項を定めたものである。（他法との関連）<br />

第２条　この規則に定めのない事項は、労働基準法、その他の法令の定めるところによる。この定め及びこれに付随する諸規定以外の事項については、院長が定めるところによる。
</p>
            </div>
        </div>
    </div>
</div>
<Footer />

        </Authenticated>
    );
}
