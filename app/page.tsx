"use client";

import { useState } from "react";
import Image from "next/image";

/* ================= DATA ================= */
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

const SERVICES = [
  "Software Developer",
  "Service Jaringan",
  "Laptop & Komputer",
  "CCTV",
  "IT Support",
  "Layanan Lainnya",
];

/* ================= COMPONENT ================= */
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-gray-50 text-gray-800 scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="AMD COM Logo" width={42} height={42} priority />
            <div className="leading-tight">
              <span className="block text-xl font-extrabold tracking-wide">
                <span className="text-red-600">AMD </span>
                <span className="text-blue-600">COM</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">
                IT Service & Solutions
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group transition-colors hover:text-blue-600"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="https://wa.me/6281236208542"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 
                        text-white px-6 py-2 rounded-full font-semibold shadow-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19.11 17.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.98.96-.98 2.35 0 1.39 1.01 2.73 1.15 2.92.14.18 1.99 3.04 4.82 4.26.67.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.82.74 5.58 2.14 8.01L3 29l5.13-2.06c2.36 1.29 5.02 1.98 7.89 1.98 7.18 0 13.02-5.84 13.02-13.02C29.04 8.84 23.2 3 16.02 3zm0 23.63c-2.55 0-5.05-.68-7.22-1.97l-.52-.31-3.04 1.22.99-3.13-.34-.54a10.62 10.62 0 01-1.67-5.73c0-5.87 4.78-10.65 10.65-10.65 5.87 0 10.65 4.78 10.65 10.65 0 5.87-4.78 10.65-10.65 10.65z" />
              </svg>
              WhatsApp
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden active:scale-95 transition"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-xl border-t animate-in slide-in-from-top-2">
            <div className="px-6 py-6 flex flex-col gap-6 font-medium">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="active:scale-95 transition"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/6281236208542"
                target="_blank"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 
                          text-white px-6 py-2 rounded-full font-semibold shadow-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.11 17.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.98.96-.98 2.35 0 1.39 1.01 2.73 1.15 2.92.14.18 1.99 3.04 4.82 4.26.67.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                  <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.82.74 5.58 2.14 8.01L3 29l5.13-2.06c2.36 1.29 5.02 1.98 7.89 1.98 7.18 0 13.02-5.84 13.02-13.02C29.04 8.84 23.2 3 16.02 3zm0 23.63c-2.55 0-5.05-.68-7.22-1.97l-.52-.31-3.04 1.22.99-3.13-.34-.54a10.62 10.62 0 01-1.67-5.73c0-5.87 4.78-10.65 10.65-10.65 5.87 0 10.65 4.78 10.65 10.65 0 5.87-4.78 10.65-10.65 10.65z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden pt-40 pb-32 bg-gradient-to-r from-blue-600 to-red-600 text-white"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Solusi IT Profesional
            <br />
            <span className="text-yellow-300">• Cepat • Terpercaya</span>
          </h1>

          <p className="text-lg md:text-xl opacity-95 mb-10">
            Melayani perbaikan & pengerjaan IT untuk rumah, usaha, dan kantor di{" "}
            <strong>Subang & sekitarnya</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#services"
              className="flex items-center gap-3 bg-white text-blue-600 
                        px-10 py-4 rounded-full font-semibold shadow-xl 
                        hover:scale-105 active:scale-95 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <span>Lihat Layanan</span>
            </a>
            <a
              href="https://wa.me/6281236208542"
              className="bg-green-500 flex hover:bg-green-600 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 active:scale-95 transition"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 mx-2"
                >
                  <path d="M19.11 17.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.98.96-.98 2.35 0 1.39 1.01 2.73 1.15 2.92.14.18 1.99 3.04 4.82 4.26.67.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                  <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.82.74 5.58 2.14 8.01L3 29l5.13-2.06c2.36 1.29 5.02 1.98 7.89 1.98 7.18 0 13.02-5.84 13.02-13.02C29.04 8.84 23.2 3 16.02 3zm0 23.63c-2.55 0-5.05-.68-7.22-1.97l-.52-.31-3.04 1.22.99-3.13-.34-.54a10.62 10.62 0 01-1.67-5.73c0-5.87 4.78-10.65 10.65-10.65 5.87 0 10.65 4.78 10.65 10.65 0 5.87-4.78 10.65-10.65 10.65z" />
                </svg> 
               Konsultasi WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <span>✔ Respon Cepat</span>
            <span>✔ Teknisi Berpengalaman</span>
            <span>✔ Harga Transparan</span>
            <span>✔ Bergaransi</span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Layanan Kami
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((title) => (
              <div
                key={title}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-blue-600 to-red-600 text-white flex items-center justify-center font-bold group-hover:scale-110 transition">
                  IT
                </div>
                <h4 className="text-xl font-semibold mb-3">{title}</h4>
                <p className="text-gray-600">
                  Penanganan langsung oleh teknisi berpengalaman dengan hasil rapi dan optimal.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Tentang AMD COM
            </span>

            <h3 className="text-4xl font-extrabold mt-4 mb-6">
              Spesialis Perbaikan &<br />Layanan Teknis IT
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              <strong>AMD COM</strong> melayani berbagai permasalahan IT — dari software, hardware, jaringan, hingga CCTV.
            </p>

            <p className="text-gray-600">
              Fokus kami adalah <strong>perbaikan nyata</strong>, pengerjaan rapi, dan solusi cepat sesuai kebutuhan lapangan.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
            <h4 className="text-2xl font-bold mb-8">Keunggulan Kami</h4>

            <ul className="space-y-4">
              <li>✔ Fokus perbaikan langsung</li>
              <li>✔ Layanan lengkap & bergaransi</li>
              <li>✔ Respon cepat & profesional</li>
              <li>✔ Berpengalaman & terpercaya</li>
            </ul>

            <div className="mt-10 grid grid-cols-2 text-center">
              <div>
                <p className="text-3xl font-extrabold text-blue-600">5+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-red-600">100+</p>
                <p className="text-sm">Klien Ditangani</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Hubungi Kami
            </span>

            <h3 className="text-4xl font-extrabold mt-4 mb-6">
              Butuh Perbaikan IT?
              <br />
              Kami Siap Membantu
            </h3>

            <p className="text-lg text-gray-700 mb-8">
              Laptop, komputer, jaringan, software, atau CCTV bermasalah? Hubungi kami sekarang.
            </p>

            <a
              href="https://wa.me/6281236208542"
              className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.11 17.38c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.98.96-.98 2.35 0 1.39 1.01 2.73 1.15 2.92.14.18 1.99 3.04 4.82 4.26.67.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                  <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.82.74 5.58 2.14 8.01L3 29l5.13-2.06c2.36 1.29 5.02 1.98 7.89 1.98 7.18 0 13.02-5.84 13.02-13.02C29.04 8.84 23.2 3 16.02 3zm0 23.63c-2.55 0-5.05-.68-7.22-1.97l-.52-.31-3.04 1.22.99-3.13-.34-.54a10.62 10.62 0 01-1.67-5.73c0-5.87 4.78-10.65 10.65-10.65 5.87 0 10.65 4.78 10.65 10.65 0 5.87-4.78 10.65-10.65 10.65z" />
                </svg> 
              Chat WhatsApp Sekarang
            </a>

            <p className="mt-4 text-sm text-gray-500">
              ⏱ Respon cepat • Bisa panggilan ke lokasi
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-200/40 transition border border-gray-200">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow text-sm font-semibold text-gray-700">
              📍 Lokasi AMD COM
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d393.32047309198265!2d107.74765455588529!3d-6.562417776726212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid"
              className="w-full h-[380px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
        © 2026 <span className="text-white font-semibold">AMD COM</span> — Solusi IT Profesional Subang
      </footer>

    </main>
  );
}
