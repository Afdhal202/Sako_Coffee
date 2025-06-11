// import LocationIcon from "./icons/location";

function Coffee() {
    const menu = [
        {
            icon: <img src="/menu/espresso.jpeg" alt="Espresso" className="w-10 h-10 rounded-full object-cover mr-3 inline-block" />,
            item: "Coffee Latte",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$2.95"
        },
        {
            icon: <img src="/menu/Kopi Susu.jpeg" alt="Kopi Susu" className="w-10 h-10 rounded-full object-cover mr-3 inline-block" />,
            item: "Coffee Moccha Latte",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$3.05"
        },
        {
            icon: <img src="/menu/Kopi Hitam.jpeg" alt="Kopi Hitam" className="w-10 h-10 rounded-full object-cover mr-3 inline-block" />,
            item: "Capucino",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$5.50"
        },
        {
            icon: <img src="/menu/espresso.jpeg" alt="Java Coffee" className="w-10 h-10 rounded-full object-cover mr-3 inline-block" />,
            item: "Java Coffee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$3.05"
        },
        {
            icon: <img src="/menu/Kopi Hitam.jpeg" alt="Luwak Coffee" className="w-10 h-10 rounded-full object-cover mr-3 inline-block" />,
            item: "Luwak Coffee",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$13.00"
        }
    ]

    return (
        <>
            <section className="container mx-auto bg-zinc-700 shadow-lg px-6 py-10">
                <div>
                    <h1 className="text-center text-2xl font-bold underline mb-14 shadow-2xl">Kami Hanya Memiliki Yang Terbaik</h1>
                </div>

                <div className="flex flex-col md:flex-row mt-4 gap-6">
                    {/* Gambar di atas pada sm/md, di kiri pada lg+ */}
                    <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-6">
                        <img className="w-64 h-64 object-contain" src="/menu/Kopi Hitam.jpeg" alt="Kopi Hitam" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 w-full">
                        {
                            menu.map(function (item_menu, index) {
                                return (
                                    <div key={index} className="flex items-center gap-3 mb-6">
                                        {item_menu.icon}
                                        <div>
                                            <div className="font-bold text-2xl shadow-2xl">{item_menu.item}</div>
                                            <div>{item_menu.description}</div>
                                            <div>{item_menu.price}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>

    );

}
export default Coffee;