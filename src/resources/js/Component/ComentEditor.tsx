import React from 'react';
import useTypedPage from '@/Hooks/useTypedPage';

import * as Yup from "yup";
import { Formik, useFormik } from "formik";

import { TextEditor } from '@/Component/TextEditor';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
}

const schema = Yup.object().shape({
    name: Yup.string().min(3).max(20).required("Required"),
    message: Yup.string().min(3).max(2000).required("Required")
  });

export default function ComentEditor({
  canLogin,
  canRegister
}: Props) {
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
      <div className="">
        <TextEditor
          setFieldValue={(val) => formik.setFieldValue("message", val)}
          value={formik.values.message}
        />
        <p>formik values ==> {JSON.stringify(formik.values)}</p>
      </div>
    </div>
  );
}
