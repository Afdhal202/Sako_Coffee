export default function FormKontak() {
    return (
        <section className="container mx-auto bg-zinc-500 min-h-screen">
            <div className="kontak sm:p-10 p-0" id="kontak">
                <h1 className="text-4xl font-bold mb-2 text-center" data-aos="fade-up" data-aos-duration="1000" >Kontak</h1>
                <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >Mari terhubung dengan saya.</p>

                <form action="https://formsubmit.co/afdhal20022000@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Nama Lengkap</label>
                            <input className="border border-zinc-500 p-2 rounded-md" type="text" name="nama" placeholder="Masukkan Nama...." required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Email</label>
                            <input className="border border-zinc-500 p-2 rounded-md" type="email" name="email" placeholder="Masukkan Email..." required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold" htmlFor="pesan">Pesan</label>
                            <textarea className="border border-zinc-500 p-2 rounded-md" name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan...."></textarea>
                        </div>
                        <div className="text-center">
                            <button className="font-semibold bg-violet-700 hover:bg-violet-600 rounded-lg p-3 w-full cursor-pointer border border-zinc-600" type="submit">Kirim Pesan</button>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}