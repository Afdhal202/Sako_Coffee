function Hero() {
    return (
        <section
            className="bg-[url('/media/backgroud-coffee.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-white text-center max-w-2xl ">
                    <h1 className="text-7xl font-bold mb-4">Selamat Datang di Sako Coffee</h1>
                    <p className="text-2xl mb-6">Isi 33,3% Mu Dengan Secangkir Aroma dan Suasana Positif</p>
                    <button className="btn btn-wide size-15 text-2xl my-20 ">Menu</button>
                </div>
            </div>

        </section>
    );
}

export default Hero;