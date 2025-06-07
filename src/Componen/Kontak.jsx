function Kontak() {
    const info = [
        {
            icon: <i className="ri-map-pin-line text-8xl mb-2"></i>,
            title: "ALAMAT",
            desc: [
                "Kota Solok, Sumatera Barat",
                "Indonesia"
            ]
        },
        {
            icon: <i className="ri-phone-line text-8xl mb-2"></i>,
            title: "TELEPON",
            desc: [
                "+62 12345678",
                "+62 87654321"
            ]
        },
        {
            icon: <i className="ri-mail-line text-8xl mb-2"></i>,
            title: "E-MAIL",
            desc: [
                "pandu@gmail.com",
                "wijaya@gmail.com"
            ]
        },
        {
            icon: <i className="ri-time-line text-8xl mb-2"></i>,
            title: "JAM KOPI",
            desc: [
                "Selasa - Minggu 10.00 - 23.30"
            ]
        }
    ]
    return (
        <section className="py-8">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12">
                {info.map((item, idx) => (

                    <div
                        key={idx}
                        className="flex-1 bg-gray-100 rounded-md flex flex-col items-center p-8 min-w-[220px] max-w-xs mx-auto shadow-sm"
                    >
                        {item.icon && (
                            <div className="text-4xl text-[#6f4e37] mb-2">
                                {item.icon}
                            </div>
                        )}
                        <h3 className="text-lg font-bold mt-2 mb-1 tracking-wide">{item.title}</h3>
                        <div className="text-gray-700 text-center text-base font-normal">
                            {item.desc.map((d, i) => (
                                <div key={i}>{d}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Kontak;