// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import image4 from "../../images/business.jpg";
import axios from "axios";

import { toast } from "react-toastify";
toast

const WorkUs = () => {
  const { t } = useTranslation();

  const [formEmail, setFormEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formEmail);
    e.target.reset();
  };

  const sendEmail = async (formEmail) => {
    try {
      await axios
        .post(
          `/api/v1/record/addemail.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
          formEmail,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(({ data }) => setFormEmail(data));
      toast.success(t("Email sent performed"));
    } catch (error) {
      console.log(error);
      toast.error(t("Email already exists"))
    }
  };

  return (
    <>
      {/* Section: Design Block */}
      <section className="bg-stone-200">
        {/* Jumbotron */}
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.17),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,56%,47%,1)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h1 className="mt-2 mb-8 text-2xl  tracking-tight md:text-2xl xl:text-3xl">
                    {t("Are You Already")} <br /> {t("Working With Us?")}
                  </h1>
                  <p className="mb-20">
                    {t("At vero eos et accusamus et iusto odio dignissimos")}{" "}
                    <br /> {t("ducimus qui blanditiis praesentium voluptatum")}{" "}
                    <br />{" "}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        type="email"
                        id="emailw"
                        name="email"
                        onChange={(e) =>
                          setFormEmail({ ...formEmail, email: e.target.value })
                        }
                        defaultValue={""}
                        className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={t("Enter your email")}
                        required=""
                      />
                      <button
                        type="submit"
                        className="text-white-cream absolute right-3.5 bottom-2.5 bg-red-warm  hover:bg-red-retro focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2"
                      >
                        {t("Subscribe")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0 ">
                <img
                  src={image4}
                  className=" h-100 w-100 rounded-lg shadow-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkUs;
