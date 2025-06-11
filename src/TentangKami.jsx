function Tentang() {

    const produk = [
        {
            icon: <i className="ri-recycle-fill text-4xl text-[#b87333] mr-4"></i>,
            title: "MODERN COFFEE BAG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            icon: <i className="ri-cup-fill text-4xl text-[#b87333] mr-4"></i>,
            title: "CHOICE SEEDS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            icon: <i className="ri-sun-fill text-4xl text-[#b87333] mr-4"></i>,
            title: "PREMIUM TASTE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
    ];

    return (
        <section className="container mx-auto bg-zinc-700 shadow-lg px-6 py-28 " id="tentang">
            {/* judul */}
            <div className="font-semibold mb-8">
                <div className="text-2xl text-amber-700">Tentang Produk</div>
                <p className="text-black text-4xl my-4">Bahan Terbaik</p>
            </div>


            {/* konten */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-8 w-full  ">
                    {produk.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 border-b last:border-b-0 border-gray-200 pb-6 last:pb-0">
                            <div>{item.icon}</div>
                            <div>
                                <h1 className="font-bold text-base text-black mb-1 tracking-wide">{item.title}</h1>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <img src="/media/sangrai.jpeg" className="w-full h-80 object-contain rounded-2xl " />

            </div>
        </section>
    );
}
export default Tentang;
