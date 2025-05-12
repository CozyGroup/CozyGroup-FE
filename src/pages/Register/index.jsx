import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navigation from "../../components/ui/Navigation";
import google from "../../assets/image/icon/gp-btn.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Họ và tên không được để trống'),
    email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại phải là số').required('Số điện thoại không được để trống'),
    password: Yup.string().min(6, 'Mật khẩu phải ít nhất 6 ký tự').required('Mật khẩu không được để trống')
  });

  const onSubmit = (values) => {
    console.log(values);
    alert('Đăng ký thành công!');
  };

  return (
    <>
      <Navigation
        items={[{ label: "Trang chủ", href: "/" }, { label: "Đăng ký tài khoản" }]}
      />
      <div className="w-full p-[30px] my-10 font-quicksand text-text flex flex-col lg:flex-row gap-6 md:align-center md:justify-center">
        <div className="bg-white shadow-lg rounded-md flex flex-col md:flex-row w-full max-w-3xl">
          {/* Form Đăng ký */}
          <div className="md:w-7/12 w-full p-8">
            <h2 className="text-xl font-bold mb-6 text-center md:text-left">ĐĂNG KÝ TÀI KHOẢN</h2>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              <Form>
                <div className="mb-4">
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <Field
                    name="phone"
                    type="text"
                    placeholder="Số điện thoại"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-[#FF0000] text-white py-2 rounded">
                  Đăng ký
                </button>
              </Form>
            </Formik>

            <p className="text-sm text-center mt-4">
              Nếu có tài khoản, bạn có thể đăng nhập {' '}
              <a href="/login" className="font-bold hover:text-primary">
                tại đây
              </a>
            </p>

            <div className="mt-5 text-center">
              <p className="mb-4">Hoặc đăng nhập bằng</p>
              <Link to="#" className="flex items-center justify-center text-white px-4 rounded mx-auto ">
                <img src={google} alt="" className='h-9' />
              </Link>
            </div>
          </div>

          {/* Quyền lợi */}
          <div className="md:w-5/12 w-full flex flex-col justify-start align-top">
            <div className="bg-gray-100 p-8">
              <h3 className="font-bold mb-4 mt-11 text-left">Quyền lợi khi đăng ký thành viên</h3>
              <ul className="text-sm mb-6 space-y-2 text-left mt-8">
                <li>Vận chuyển siêu tốc</li>
                <li>Sản phẩm đa dạng</li>
                <li>Đổi trả dễ dàng</li>
                <li>Đăng ký tích điểm để được hoàn tiền</li>
              </ul>
              <Link to="/login" className="bg-primary hover:bg-[#FF0000] text-white py-2 px-4 rounded w-full max-w-xs mx-auto md:mx-0">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Register;
