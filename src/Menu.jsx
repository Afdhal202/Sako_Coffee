import { produkList } from "./data";

function Menu() {
    return (
        <section className="container mx-auto py-28 bg-zinc-500 min-h-screen">

            <div className="text-4xl font-bold text-center pt-14 text-black"> Favorite Menu</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {produkList.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-xl p-4 shadow-lg hover:scale-105 transition"
                    >
                        <img
                            src={item.gambar}
                            alt={item.nama}
                            className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                        <h2 className="text-lg font-semibold">{item.nama}</h2>
                        <p className="text-gray-600">{item.harga}</p>
                    </div>
                ))
                }
            </div>
        </section>


    );
}

export default Menu;