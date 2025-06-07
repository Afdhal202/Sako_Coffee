
const Footer = () => {
    return (
        <section className="text-center mt-25">
            <h1 className="text-5xl font-bold text-amber-600 ">Kami Buka 7 Hari Seminggu</h1>
            <p className="text-2xl font-bold">Pukul 11.00 - 22.00</p>

            <div>
                <div className="grid grid-cols-2 text-white items-center text-xl">
                    <div>
                        <div>Alamat</div>
                        <h2>Solok</h2>
                        <p>indonesia </p>
                        <p>111111</p>
                    </div>

                    <div>
                        <div>BUTUH BANTUAN?HUBUNGI KAMI</div>
                        <h2 className="text-4xl">+6282281685799</h2>
                        <p>Kirim Pesan Kepada Kami </p>
                        <p>afdhal00@gmail.com</p>
                    </div>

                </div>
            </div>


            <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
                <h1 className="text-2xl font-bold">Sako Coffee</h1>
                <div className="flex gap-7">
                    <a href="#beranda">Beranda</a>
                    <a href="#tentang">Tentang</a>
                    <a href="#proyek">Proyek</a>
                </div>
                <div className="flex items-center gap-3">
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