<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Inserta los datos:</h2>
        <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                    <label for="name" :value="__('Name')" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Usuario:</label>
                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" :value="old('name', $user?->name)" placeholder="Nombre Usuario" autocomplete="name">
                    <x-input-error class="mt-2" :messages="$errors->get('name')"/>
                </div>
                <div class="w-full">
                    <label for="email" :value="__('Email')" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Usuario:</label>
                    <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" :value="old('email', $user?->email)" placeholder="Email Usuario" autocomplete="email">
                    <x-input-error class="mt-2" :messages="$errors->get('email')"/>
                </div>
                <div class="w-full">
                    <label for="centros_id" :value="__('Centros Id')" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Centro:</label>
                    <input type="number" name="centros_id" id="centros_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" :value="old('centros_id', $user?->centros_id)" autocomplete="centros_id" placeholder="Centros Id">
                    <x-input-error class="mt-2" :messages="$errors->get('centros_id')"/>
                </div>
                <div class="sm:col-span-2">
                    <label for="password" :value="__('Password')" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña:</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" autocomplete="new-password" placeholder="Password">
                    <x-input-error class="mt-2" :messages="$errors->get('password')"/>
                </div>
            </div>
            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-gray-50 border border-gray-400 hover:bg-gray-300 hover:text-white text-gray-900 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Añadir Usuario
            </button>
        </form>
    </div>
</section>