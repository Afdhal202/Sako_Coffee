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
            <div>
                <h1 className="text-center">Kami Hanya Memiliki Yang Terbaik</h1>
            </div>
            <section className="grid grid-cols-2 mt-4 ">
                <div >
                    <img className="items-center mx-auto" src="../public/menu/Kopi Hitam.jpeg" alt="" />
                </div>
                <div>
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
                                    <div>{item_menu.item}</div>
                                    <div>{item_menu.description}</div>
                                    <div>{item_menu.price}</div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>

    );

}
export default Coffee;