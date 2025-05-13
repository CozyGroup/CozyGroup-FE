import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navigation from "../../components/ui/Navigation";
import AccountSidebar from '../../components/ui/AccountSidebar';

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Vui lòng nhập mật khẩu cũ"),
  newPassword: Yup.string()
    .min(8, "Mật khẩu phải ít nhất 8 ký tự")
    .required("Vui lòng nhập mật khẩu mới"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
});

const handleSubmit = (values) => {
  console.log("Dữ liệu form:", values);
  alert("Đổi mật khẩu thành công!");
};

const ChangePasswordForm = () => (
  <Formik
    initialValues={{ oldPassword: "", newPassword: "", confirmPassword: "" }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {() => (
      <Form className="space-y-4">
        {/* Mật khẩu cũ */}
        <div>
          <Field
            type="password"
            name="oldPassword"
            placeholder="Mật khẩu cũ*"
            className="w-full border rounded px-4 py-2 focus:outline-none"
          />
          <ErrorMessage
            name="oldPassword"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Mật khẩu mới */}
        <div>
          <Field
            type="password"
            name="newPassword"
            placeholder="Mật khẩu mới*"
            className="w-full border rounded px-4 py-2 focus:outline-none"
          />
          <ErrorMessage
            name="newPassword"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Nhập lại mật khẩu */}
        <div>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu*"
            className="w-full border rounded px-4 py-2 focus:outline-none"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Nút submit */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#FF0000] text-white py-2 rounded transition"
        >
          Đổi mật khẩu
        </button>
      </Form>
    )}
  </Formik>
);

const ChangePassword = () => {
  return (
    <>
      <Navigation
        items={[{ label: "Trang chủ", href: "/" }, { label: "Đổi mật khẩu" }]}
      />
      <div className="w-full lg:px-[60px] px-[20px] lg:py-[50px] py-[30px] font-quicksand text-text flex flex-col md:flex-row md:align-center md:justify-start">
        {/* Sidebar */}
        <AccountSidebar />
        {/* Form */}
        <main className="flex-1 flex items-center justify-start mt-10 md:mt-0 w-full">
          <div className="w-full max-w-md bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Đổi Mật Khẩu</h2>
            <p className="text-sm mb-6">
              Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự
            </p>
            {/* Gọi Form */}
            <ChangePasswordForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default ChangePassword;
