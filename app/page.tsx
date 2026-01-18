"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);
  
  return (
    <main className="bg-gray-50 text-gray-800 scroll-smooth">

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="AMD COM Logo"
                  width={40}
                  height={40}
                  priority
                />
                <span className="text-xl font-extrabold tracking-wide">
                  <span className="text-red-600">AMD </span>
                  <span className="text-blue-600">COM</span>
                </span>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Layanan", href: "#services" },
                  { label: "Tentang", href: "#about" },
                  { label: "Kontak", href: "#contact" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                  </a>
                ))}

                {/* CTA */}
                <a
                  href="https://wa.me/6281236208542"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow transition"
                >
                  WhatsApp
                </a>
              </nav>

              {/* Mobile Button */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {open && (
              <div className="md:hidden bg-white shadow-lg border-t">
                <div className="px-6 py-6 flex flex-col gap-6 font-medium text-gray-700">
                  <a href="#home" onClick={() => setOpen(false)}>Home</a>
                  <a href="#services" onClick={() => setOpen(false)}>Layanan</a>
                  <a href="#about" onClick={() => setOpen(false)}>Tentang</a>
                  <a href="#contact" onClick={() => setOpen(false)}>Kontak</a>

                  <a
                    href="https://wa.me/6281236208542"
                    target="_blank"
                    className="mt-2 bg-green-500 text-white text-center py-3 rounded-full font-semibold"
                  >
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            )}
    </header>

      {/* Hero */}
      <section
        id="home"
        className="pt-36 pb-28 bg-gradient-to-r from-blue-600 to-red-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Solusi IT Profesional & Terpercaya
          </h1>
          <h2 className="mb-6">di Kota Subang, Jawa Barat.</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Software Developer • Jaringan • Laptop • Komputer • CCTV
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Lihat Layanan
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-14">
            Layanan Kami
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Software Developer",
                color: "text-blue-600",
                desc: "Pembuatan aplikasi web, sistem informasi, dan website profesional.",
              },
              {
                title: "Service Jaringan",
                color: "text-red-600",
                desc: "Instalasi LAN, WiFi, Mikrotik, dan jaringan kantor & rumah.",
              },
              {
                title: "Laptop & Komputer",
                color: "text-blue-600",
                desc: "Service, install ulang OS, upgrade RAM & SSD.",
              },
              {
                title: "CCTV",
                color: "text-red-600",
                desc: "Pemasangan CCTV indoor & outdoor + monitoring online.",
              },
              {
                title: "IT Support",
                color: "text-blue-600",
                desc: "Troubleshooting, maintenance sistem, dan pendampingan IT.",
              },
              {
                title: "Layanan Lainnya",
                color: "text-red-600",
                desc: "Konsultasi IT, server, backup data, dan solusi teknologi.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl shadow hover:-translate-y-2 hover:shadow-xl transition"
              >
                <h4 className={`text-xl font-semibold mb-3 ${item.color}`}>
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Tentang AMD COM
              </span>

              <h3 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Spesialis Perbaikan &<br className="hidden sm:block" />
                Layanan Teknis IT Terpadu
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>AMD COM</strong> adalah penyedia layanan
                <span className="font-semibold"> perbaikan dan pengerjaan teknis IT</span>
                yang melayani berbagai kebutuhan mulai dari software, jaringan,
                komputer, laptop, hingga sistem keamanan CCTV.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Kami hadir sebagai solusi langsung untuk setiap permasalahan IT —
                mulai dari <span className="font-semibold text-gray-800">kerusakan,
                error sistem, instalasi, hingga optimalisasi perangkat</span>,
                baik untuk kebutuhan rumah, usaha, maupun kantor.
              </p>
            </div>

            {/* Value Box */}
            <div className="bg-white rounded-3xl shadow-xl p-10 relative overflow-hidden">

              {/* Decorative Gradient */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-600 to-red-600 rounded-full opacity-10"></div>

              <h4 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">
                Keunggulan Layanan Kami
              </h4>

              <ul className="space-y-5 relative z-10">
                <li className="flex gap-4">
                  <span className="text-blue-600 text-xl">✔</span>
                  <p>
                    <span className="font-semibold">Fokus Perbaikan Nyata</span> —
                    bukan teori, langsung ditangani teknisi.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-red-600 text-xl">✔</span>
                  <p>
                    <span className="font-semibold">Layanan Lengkap</span> dari
                    software, hardware, jaringan, hingga CCTV.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-blue-600 text-xl">✔</span>
                  <p>
                    <span className="font-semibold">Pengerjaan Rapi & Terukur </span>
                    sesuai kebutuhan di lapangan.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-red-600 text-xl">✔</span>
                  <p>
                    <span className="font-semibold">Respon Cepat</span> untuk
                    troubleshooting dan kendala mendesak.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Contact Info */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Hubungi Kami
              </span>

              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Butuh Perbaikan IT?<br className="hidden sm:block" />
                Kami Siap Membantu
              </h3>

              <p className="text-lg text-gray-700 mb-10">
                Mengalami masalah laptop, komputer, jaringan, software, atau CCTV?
                Tim kami siap menangani langsung dengan solusi yang cepat,
                rapi, dan profesional.
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6281236208542?text=Halo%20AMD%20COM,%20saya%20ingin%20memperbaiki%20perangkat%20IT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition hover:scale-105"
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 2.08.64 4.02 1.76 5.62L2 22l4.64-1.84a9.8 9.8 0 005.4 1.6c5.46 0 9.88-4.42 9.88-9.88C21.92 6.42 17.5 2 12.04 2z" />
                </svg>

                Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

              {/* Location Pin */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Workshop / Lokasi AMD COM
                </span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.72976031853452!2d107.74794304912649!3d-6.56249798194229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid"
                className="w-full h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="text-center text-sm">
          © 2026 <span className="text-white font-semibold">AMD COM</span>. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
