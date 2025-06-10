import React from "react";
import "../index.css";

function CTA() {
    return (
        <section className="container mx-auto bg-zinc-500 shadow-lg px-6 py-10">
            <div className="cta-section bg-[#6f4e37] text-white py-12 px-4 text-center rounded-xl my-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nikmati Kopi Terbaik Hari Ini!</h2>
                <p className="text-base md:text-lg mb-6">
                    Pesan sekarang dan rasakan sensasi kopi pilihan dari biji terbaik Indonesia.
                </p>
                <a href="#kontak" className="inline-block bg-white text-[#6f4e37] px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-md hover:bg-[#e0c3a3] transition-colors duration-200">
                    Pesan Sekarang
                </a>
            </div>
        </section>
    );
}

export default CTA;
