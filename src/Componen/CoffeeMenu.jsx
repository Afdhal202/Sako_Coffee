// import LocationIcon from "./icons/location";

function Coffee() {
    const menu = [

        {
            // icon: <LocationIcon />,
            "item": "Coffee Latte",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "price": "$2.95"
        },
        {
            "item": "Coffee Moccha Latte",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "price": "$3.05"
        },
        {
            "item": "Capucino",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "price": "$5.50"
        },
        {
            "item": "Java Coffee",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "price": "$3.05"
        },
        {
            "item": "Luwak Coffee",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "price": "$13.00"
        }

    ]

    return (
        <>
            <section className="container mx-auto bg-zinc-700 shadow-lg px-6 py-10">
                <div>
                    <h1 className="text-center text-2xl font-bold underline mb-14 shadow-2xl">Kami Hanya Memiliki Yang Terbaik</h1>
                </div>

                <div className="grid grid-cols-2 mt-4 ">
                    <div className="flex justify-center items-center">
                        <img className="w-64 h-64 object-contain" src="/menu/Kopi Hitam.jpeg" alt="Kopi Hitam" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        {
                            menu.map(function (item_menu, index) {
                                return (
                                    <div key={index}>
                                        {
                                            item_menu.icon ? (
                                                <div className="text-2xl text-[#6f4e37]">
                                                    {item_menu.icon}
                                                </div>
                                            ) : ""
                                        }
                                        <div className="font-bold text-2xl shadow-2xl">{item_menu.item}</div>
                                        <div>{item_menu.description}</div>
                                        <div>{item_menu.price}</div>

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