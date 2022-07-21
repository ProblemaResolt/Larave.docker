import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/inertia-react';

import * as Yup from "yup";
import { Formik, useFormik } from "formik";

import Main from '@/Pages/Front/Main';
import Footer from '@/Pages/Front/Footer';
import { TextEditor } from '@/Component/TextEditor';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
}

const schema = Yup.object().shape({
    name: Yup.string().min(3).max(20).required("Required"),
    message: Yup.string().min(3).max(2000).required("Required")
  });

export default function Welcome({
  canLogin,
  canRegister
}: Props) {
  const route = useRoute();
  const page = useTypedPage();

  const formik = useFormik({
    initialValues: { name: "", message: "<p>こちらに文章を入れてください。</p>" },
    onSubmit: (values) => {
      console.log("Logging in ", values);
    },
    validationSchema: schema
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Head title="Welcome" />

      {canLogin ? (
        <h1 className="max-w-full">
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex'>
                        <div className='flex-shrink-0 flex items-center'>Nts Japan Ltd</div>
                    </div>
                <div className='flex-shrink-0 flex items-center sm:flex sm:items-center sm:ml-6'>
          {page.props.user ? (
            <InertiaLink
              href={route('dashboard')}
              className="text-sm text-gray-700 underline"
            >
              Dashboard
            </InertiaLink>
          ) : (
            <>
              <InertiaLink
                href={route('login')}
                className="text-sm text-gray-700 underline"
              >
                Log in
              </InertiaLink>

              {canRegister ? (
                <InertiaLink
                  href={route('register')}
                  className="ml-4 text-sm text-gray-700 underline"
                >
                  Register
                </InertiaLink>
              ) : null}
            </>
          )}
          </div>
          </div>
          </div>
        </h1>
      ) : null}

      <div className="">
        <Main />
        <TextEditor
          setFieldValue={(val) => formik.setFieldValue("message", val)}
          value={formik.values.message}
        />
        <p>formik values ==> {JSON.stringify(formik.values)}</p>
      </div>
        <Footer />
    </div>
  );
}
