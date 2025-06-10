
const Footer = () => {
    return (
        <section className="container mx-auto bg-zinc-700 text-center px-6  ">
            <h1 className="text-5xl font-bold text-yellow-700 mb-4 py-4">Kami Buka 7 Hari Seminggu</h1>
            <p className="text-2xl underline font-bold mb-4">Pukul 11.00 - 22.00</p>

            <div>
                <div className="grid grid-cols-2 text-white items-center font-semibold text-xl pt-10 px-6">
                    <div className="text-left border-r-4 pr-4">
                        <div>Alamat</div>
                        <h2>Solok</h2>
                        <p>indonesia </p>
                        <p>111111</p>
                    </div>

                    <div className="text-right ">
                        <div>BUTUH BANTUAN?HUBUNGI KAMI</div>
                        <h2 className="text-4xl">+6282281685799</h2>
                        <p>Kirim Pesan Kepada Kami </p>
                        <p>afdhal00@gmail.com</p>
                    </div>

                </div>
            </div>


            <div className="mb-4 mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
                <h1 className="text-2xl font-bold shadow-2xl">Sako Coffee</h1>
                <div className="flex gap-7">
                    <a href="#beranda">Beranda</a>
                    <a href="#tentang">Tentang</a>
                    <a href="#proyek">Proyek</a>
                </div>
                <div className="flex items-center shadow-2xl gap-3">
                    <a href="#">
                        <i className="ri-github-fill ri-2x"></i>
                    </a>
                    <a href="#">
                        <i className="ri-instagram-fill ri-2x"></i>
                    </a>
                    <a href="#">
                        <i className="ri-reddit-fill ri-2x"></i>
                    </a>
                    <a href="#">
                        <i className="ri-youtube-fill ri-2x"></i>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Footer