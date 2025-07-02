function Cards() {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">

            <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <h2 class="text-xl font-bold mb-2 text-gray-800">Judul 1</h2>
                <p class="text-gray-600">Deskripsi singkat untuk card pertama.</p>
            </div>

            <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <h2 class="text-xl font-bold mb-2 text-gray-800">Judul 2</h2>
                <p class="text-gray-600">Informasi tambahan untuk card kedua.</p>
            </div>

            <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <h2 class="text-xl font-bold mb-2 text-gray-800">Judul 3</h2>
                <p class="text-gray-600">Isi atau data lainnya di sini.</p>
            </div>


            <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <h2 class="text-xl font-bold mb-2 text-gray-800">Judul 4</h2>
                <p class="text-gray-600">Teks singkat untuk menjelaskan card ini.</p>
            </div>
        </div>

    )
}

export default Cards;