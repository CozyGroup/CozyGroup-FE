import React from "react";
import Navigation from "../../components/ui/Navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import background_title from "../../assets/image/imgs/background_title.webp";
import shiper from "../../assets/image/imgs/shiper.webp";

const validationSchema = Yup.object({
    fullName: Yup.string().required("Vui lòng nhập họ và tên"),
    phone: Yup.string()
        .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ")
        .required("Vui lòng nhập số điện thoại"),
    people: Yup.number()
        .min(1, "Phải ít nhất 1 người")
        .required("Vui lòng nhập số lượng người"),
    order: Yup.string().required("Vui lòng nhập món bạn muốn đặt"),
    date: Yup.string().required("Vui lòng chọn ngày"),
    time: Yup.string().required("Vui lòng chọn giờ"),
});

const Reservation = () => {
    return (
        <>
            <Navigation
                items={[{ label: "Trang chủ", href: "/" }, { label: "Đặt bàn" }]}
            />

            <div className="w-full p-[30px] my-10 font-quicksand text-text flex flex-col lg:flex-row gap-6 align-center justify-center">
                <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white shadow-lg overflow-hidden">
                    {/* Bên trái */}
                    <div className="bg-primary text-white flex flex-col justify-center items-center py-6 md:w-1/3">
                        <div className="border-dashed border-white border p-10 text-center">
                            <h2 className="text-[23px]">Thời gian</h2>
                            <h1 className="text-[50px] font-bold my-2 font-oswald">Mở Cửa</h1>
                            <img src={background_title} alt="background_title" className="mx-auto my-4" />
                            <p className="mt-2 text-center text-lg">TỪ 9:00 - 22:00</p>
                            <p className="mt-2 text-base">Tất cả các ngày trong tuần</p>

                            <div className="mt-20">
                                <img src={background_title} alt="background_title" className="mx-auto my-4" />
                                <p className="text-2xl font-semibold">0936036565</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-8 flex flex-col justify-center">
                        <div className="flex items-center justify-center mb-6">
                            <img
                                src={shiper}
                                alt="Logo"
                                className="w-32 h-32 mr-2"
                            />
                            <h1 className="text-3xl font-bold font-oswald">Đặt Bàn</h1>
                        </div>

                        {/* Formik Form */}
                        <Formik
                            initialValues={{
                                fullName: "",
                                phone: "",
                                people: "",
                                order: "",
                                date: "",
                                time: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {() => (
                                <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Họ tên */}
                                    <div>
                                        <Field
                                            type="text"
                                            name="fullName"
                                            placeholder="Họ và tên"
                                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-full"
                                        />
                                        <ErrorMessage
                                            name="fullName"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Số điện thoại */}
                                    <div>
                                        <Field
                                            type="text"
                                            name="phone"
                                            placeholder="Số điện thoại"
                                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-full"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Số lượng người */}
                                    <div>
                                        <Field
                                            type="number"
                                            name="people"
                                            placeholder="Số lượng người"
                                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-full"
                                        />
                                        <ErrorMessage
                                            name="people"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Đặt món */}
                                    <div>
                                        <Field
                                            type="text"
                                            name="order"
                                            placeholder="Đặt món"
                                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-full"
                                        />
                                        <ErrorMessage
                                            name="order"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Ngày */}
                                    <div>
                                        <Field
                                            type="date"
                                            name="date"
                                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-full"
                                        />
                                        <ErrorMessage
                                            name="date"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Giờ */}
                                    <div>
                                        <Field
                                            type="time"
                                            name="time"
                                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-full"
                                        />
                                        <ErrorMessage
                                            name="time"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    {/* Nút */}
                                    <div className="md:col-span-2 flex justify-center mt-4">
                                        <button
                                            type="submit"
                                            className="bg-primary hover:bg-[#FF0000] text-white px-6 py-2 rounded"
                                        >
                                            Xác nhận
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Reservation;
