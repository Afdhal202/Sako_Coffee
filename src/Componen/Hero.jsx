import { Link } from "react-router";

function Hero() {
    return (
        <section
            className="container mx-auto bg-[url('/media/backgroud-coffee.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center"
        >
            <div className="absolute inset-0  "></div>

            <div className="relative z-10 flex items-center mt-32 md:mt-24 sm:-mt-56 justify-center min-h-screen">
                <div className="text-white text-center max-w-2xl ">
                    <h1 className="text-white xl:text-7xl lg:text-6xl md:text-3xl  font-bold mt-32 ">Selamat Datang di Sako Coffee</h1>
                    <p className="xl:text-4xl md:text-xl sm:text-xl mb-6 mt-8">Isi 33,3% Mu Dengan Secangkir Aroma dan Suasana Positif</p>
                    <Link to="/menu">
                        <button className="btn btn-wide size-15 text-2xl my-20 ">Menu</button>
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Hero;