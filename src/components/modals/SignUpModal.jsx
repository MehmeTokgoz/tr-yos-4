import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import useAuthCall from "../../hooks/useAuthCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";
import { ErrorMessage } from "formik";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .max(10, "name must have less than 10 chars")
    .required("Please enter an username")
    .nullable(),

  email: yup.string(),

  password1: yup
    .string()
    .required()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const SignUpModal = (props) => {
  const { currentUser } = useSelector((state) => state?.auth);
  const { register } = useAuthCall();

  // const copyDeployerWallet = () => {
  //   navigator.clipboard.writeText("0x49AE63056b3A0Be0B166813eE687309Ab653c07c");
  //   // toast.success("Address copied");
  // };
  return (
    <Transition.Root show={props.openUp} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={props.setOpenUpModal}
      >
        <div className="flex items-center justify-center min-h-screen  text-center text-white">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="text-white-500 w-[500px] min-h-[450px] border-2 border-spacing-3 
            border-red-950 outline outline-offset-4  p-5 rounded-lg overflow-hidden transform transition-all bg-white-500"
            >
              <p className="text-green-dark font-bold text-lg">Sign Up</p>
              <div className="m-5 rounded items-start text-start">
                <Formik
                  initialValues={{
                    email: "",
                    name: "",
                    password1: "",
                    password2: "",
                  }}
                  validationSchema={registerSchema}
                  onSubmit={(values, actions) => {
                    register(values);
                    actions.resetForm();
                    actions.setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    handleChange,
                    errors,
                    touched,
                    handleBlur,
                    isSubmitting,
                   
                    
                  }) => (
                    <Form>
                      <div className="flex flex-col text-black ">
                        <label htmlFor="name">Username</label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="name"
                          name="name"
                          placeholder="Enter your username"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                        />

                        <ErrorMessage name="name" />

                        <label htmlFor="email">Email</label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="email"
                          name="email"
                          placeholder="Enter your e-mail"
                          type="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          variant="outlined"
                        />
                        <ErrorMessage name="email" />

                        <label htmlFor="password">Password</label>

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="password1"
                          name="password1"
                          placeholder="Enter your password"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password1}
                        />
                        <ErrorMessage name="password1" />

                        <Field
                          className="border border-green-dark my-3 p-1 rounded"
                          id="password2"
                          name="password2"
                          placeholder="Enter your password"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password2}
                        />
                      

                        <button
                          className="bg-red-warm mx-auto rounded py-3 mt-5 text-white-500 w-48"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignUpModal;
