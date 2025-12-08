import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../../components/TitleSection/TitileSection";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import { ToastContainer, toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://my-portfolio-server-delta-indol.vercel.app/api/customer/message",
        data
      );

      if (res.data.success === true) {
        toast.success(res.data.message);
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message || "Failed to send message");
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["Bokshiganj, Jamalpur", "Mymensingh, Bangladesh"],
    },
    {
      icon: FaPhone,
      title: "Contact",
      details: ["Mobile: (+880) 017357-52241", "Email: mdabdullah161036@gmail.com"],
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: ["Saturday - Thursday", "08:00 - 17:00"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 text-black dark:text-white pt-12 pb-20">
      <Helmet>
        <title>Contact | MD Abdullah</title>
      </Helmet>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <TitleSection header={"Get In Touch"} optional={"Contact Me"} helmet={"Contact"} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Have any question or interested in working together? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p
                            key={i}
                            className="text-gray-600 dark:text-gray-400 text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.div>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
