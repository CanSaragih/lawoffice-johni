"use client";
import { useState } from "react";

export default function FormContact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomor: "",
    subjek: "",
    pesan: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    Object.keys(form).forEach((key) => {
      if (!form[key as keyof typeof form]) {
        newErrors[key] = "Kolom ini wajib diisi.";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Terima kasih, pesan Anda telah terkirim!");
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-24 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
          Butuh Konsultasi Hukum?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Kami siap membantu Anda memberikan solusi terbaik atas permasalahan
          hukum yang Anda hadapi. Silakan isi formulir di bawah ini untuk
          menghubungi tim kami.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto space-y-10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.04),0_0_25px_rgba(0,0,0,0.06)] py-20 px-20"
      >
        {/* 2 kolom pertama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
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
          </div>
          <div>
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
          </div>
        </div>

        {/* 2 kolom kedua */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
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
          </div>
          <div>
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
          </div>
        </div>

        {/* Pesan */}
        <div>
          <textarea
            name="pesan"
            placeholder="Tulis pesan atau pertanyaan Anda di sini..."
            rows={5}
            value={form.pesan}
            onChange={handleChange}
            className={`w-full px-5 py-4 rounded-4xl ${
              errors.pesan ? "border border-red-600" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-300`}
          ></textarea>
          {errors.pesan && (
            <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
          )}
        </div>

        {/* Tombol */}
        <div className="text-center">
          <button
            type="submit"
            className="border-2 border-red-600 text-red-600 font-medium rounded-full px-15 py-4 hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  );
}
