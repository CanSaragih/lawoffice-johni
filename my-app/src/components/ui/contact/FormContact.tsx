"use client";
import ButtonKirim from "@/components/ButtonKirim";
import { useState } from "react";
import toast from "react-hot-toast";
import { easeInOut, motion } from "framer-motion";

// Animasi untuk section dan elemen form
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut },
  },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export default function FormContact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomor: "",
    subjek: "",
    pesan: "",
  });
  const [status, setStatus] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    Object.keys(form).forEach((key) => {
      if (!form[key as keyof typeof form]) {
        newErrors[key] = "Kolom ini wajib diisi.";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setStatus("Loading...");
    const toastID = toast.loading("Mengirim pesan...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.nama,
          email: form.email,
          subject: form.subjek,
          message: `
                Nomor Telepon: ${form.nomor} <br/>
                Pesan: ${form.pesan}
                `,
        }),
      });
      const data = await res.json();

      toast.dismiss(toastID);

      if (data.success) {
        setStatus("success");
        setForm({
          nama: "",
          email: "",
          nomor: "",
          subjek: "",
          pesan: "",
        });
        toast.success("Pesan berhasil dikirim!");
      } else {
        setStatus("error");
        toast.error("Gagal mengirim pesan.");
      }
    } catch (error) {
      console.error("Fetch Error", error);
      setStatus("error");
      toast.error("Terjjadi kesalahan saat mengirim pesan.");
    }
  };

  return (
    <motion.div
      className="px-4 sm:px-6 md:px-10 lg:px-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-['Fjord_One'] text-gray-800 mb-4">
          Butuh Konsultasi Hukum?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
          Kami siap membantu Anda memberikan solusi terbaik atas permasalahan
          hukum yang Anda hadapi. Silakan isi formulir di bawah ini untuk
          menghubungi tim kami.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl sm:max-w-3xl md:max-w-6xl mx-auto space-y-8 sm:space-y-10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.04),0_0_25px_rgba(0,0,0,0.06)] py-8 sm:py-14 px-4 sm:px-8 md:px-12"
        variants={staggerContainer}
      >
        {/* 2 kolom pertama */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          variants={fadeUp}
        >
          <motion.div variants={fadeUp}>
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-full  ${
                errors.nama ? "border border-red-600" : "border-gray-200"
              } bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-300`}
            />
            {errors.nama && (
              <p className="text-red-600 text-sm mt-1">{errors.nama}</p>
            )}
          </motion.div>
          <motion.div variants={fadeUp}>
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-full ${
                errors.email ? "border border-red-600" : "border-gray-200"
              } bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-300`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>
        </motion.div>

        {/* 2 kolom kedua */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          variants={fadeUp}
        >
          <motion.div variants={fadeUp}>
            <input
              type="number"
              name="nomor"
              placeholder="Nomor Telepon"
              value={form.nomor}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-full ${
                errors.nomor ? "border border-red-600" : "border-gray-200"
              } bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-300`}
            />
            {errors.nomor && (
              <p className="text-red-600 text-sm mt-1">{errors.nomor}</p>
            )}
          </motion.div>
          <motion.div variants={fadeUp}>
            <input
              type="text"
              name="subjek"
              placeholder="Subjek"
              value={form.subjek}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-full  ${
                errors.subjek ? "border border-red-600" : "border-gray-200"
              } bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-300`}
            />
            {errors.subjek && (
              <p className="text-red-600 text-sm mt-1">{errors.subjek}</p>
            )}
          </motion.div>
        </motion.div>

        {/* Pesan */}
        <motion.div variants={fadeUp}>
          <textarea
            name="pesan"
            placeholder="Tulis pesan atau pertanyaan Anda di sini..."
            rows={5}
            value={form.pesan}
            onChange={handleChange}
            className={`w-full px-5 py-4 rounded-2xl sm:rounded-4xl ${
              errors.pesan ? "border border-red-600" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-300 text-sm sm:text-base`}
          ></textarea>
          {errors.pesan && (
            <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
          )}
        </motion.div>

        {/* Tombol */}
        <motion.div className="w-full flex justify-center" variants={fadeUp}>
          <ButtonKirim isLoading={status === "Loading..."} />
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
