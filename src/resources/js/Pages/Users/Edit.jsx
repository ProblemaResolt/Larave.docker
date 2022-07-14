import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm} from '@inertiajs/inertia-react';
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

export default function Edit(props) {
    const { data, setData, patch, processing, errors } = useForm({
        id: props.auth.user.id,
        email: props.auth.user.email,
        lastname: props.auth.user.lastname,
        firstname: props.auth.user.firstname,
        phone: props.auth.user.phone
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        patch(route("user.update", props.auth.user.id));
    };

    return (
        <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Edit
            </h2>
        }
    >
        <Head title="Edit" />
        <ValidationErrors errors={errors} />
                            <form onSubmit={submit}>
                                <div>
                                    <Label forInput="lastname" value="Content" />

                                    <Input
                                        type="text"
                                        name="lastname"
                                        value={data.lastname}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <Label forInput="firstname" value="Content" />

                                    <Input
                                        type="text"
                                        name="firstname"
                                        value={data.firstname}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <Label forInput="email" value="email" />

                                    <Input
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <Label forInput="phone" value="Content" />

                                    <Input
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button
                                        className="ml-4"
                                        processing={processing}
                                    >
                                        更新
                                    </Button>
                                </div>
                            </form>
            </Authenticated>

    );
}
