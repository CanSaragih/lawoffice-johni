"use client";

import Image from "next/image";

const benefitData = [
  {
    title: "Konsultasi Hukum Profesional",
    icon: "/icon/consul.png",
    description:
      "Anda akan mendapatkan pendampingan langsung dari tim pengacara berpengalaman yang siap memberikan solusi hukum terbaik sesuai kebutuhan Anda.",
  },
  {
    title: "Transparansi & Kepercayaan",
    icon: "/icon/trust.png",
    description:
      "Kami selalu menjunjung tinggi kejujuran, integritas, dan transparansi dalam setiap proses hukum agar klien merasa aman dan percaya penuh.",
  },
  {
    title: "Pendampingan Menyeluruh",
    icon: "/icon/support.png",
    description:
      "Mulai dari tahap konsultasi hingga penyelesaian kasus, kami siap mendampingi Anda secara menyeluruh dengan komitmen dan tanggung jawab penuh.",
  },
];

export default function BenefitProjects() {
  return (
    <section className="bg-white text-zinc-700 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Judul Section */}
        <div className="mb-5 md:mb-12">
          <h1 className="text-2xl sm:text-2xl md:text-4xl text-center md:text-left leading-snug font-semibold text-zinc-700 mt-3 font-['Koh_Santepheap']">
            Bersama kami
          </h1>
        </div>

        {/* Grid Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefitData.map((benefit, index) => (
            <div
              key={index}
              className="
                relative flex flex-col bg-white shadow-lg hover:shadow-xl 
                transition-shadow rounded-lg p-8 overflof-hidden
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:h-[3px] before:bg-red-700 before:w-0 
                before:transition-[width] before:ease-out before:duration-500 hover:before:w-full"
            >
              <div className="mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={50}
                  height={50}
                />
              </div>

              <h2 className="text-2xl text-zinc-700 hover:text-red-800 transition-colors duration-300 mb-3 font-['Koh_Santepheap']">
                {benefit.title}
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Penutup / deskripsi tambahan */}
        <div className="mt-14 text-justify mx-auto">
          <p className="text-gray-500 text-base leading-relaxed">
            Kami percaya bahwa setiap kasus hukum memiliki cerita dan dinamika
            tersendiri, yang memerlukan dedikasi, strategi, serta empati
            mendalam untuk menemukan jalan terbaik menuju penyelesaian yang
            adil. Dengan pengalaman yang luas dan pendekatan yang berorientasi
            pada solusi, kami hadir bukan sekadar sebagai penasihat hukum,
            tetapi sebagai mitra yang memahami kebutuhan dan kepentingan klien
            secara menyeluruh.
            <br />
            Setiap langkah yang kami ambil didasari pada integritas,
            profesionalisme, dan tanggung jawab yang tinggi. Kami memastikan
            bahwa setiap klien mendapatkan perhatian pribadi, strategi hukum
            yang tepat, serta penjelasan yang transparan agar setiap keputusan
            dapat diambil dengan keyakinan penuh.
            <br />
            <br />
            Dengan komitmen terhadap keadilan dan kepuasan klien, kami terus
            berupaya menjadi mitra hukum yang dapat Anda andalkan dalam setiap
            situasi—baik untuk penyelesaian sengketa, konsultasi bisnis, maupun
            perlindungan hak pribadi. Bersama kami, Anda tidak hanya mendapatkan
            bantuan hukum, tetapi juga ketenangan, kepercayaan, dan solusi nyata
            untuk setiap permasalahan hukum yang Anda hadapi.
          </p>
        </div>
      </div>
    </section>
  );
}
