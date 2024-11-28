<div class="space-y-6 bg-white p-6 rounded-lg shadow-md">
    <div>
        <x-input-label for="name" :value="__('Name')" class="font-semibold"/>
        <x-text-input id="name" name="name" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" :value="old('name', $user?->name)" autocomplete="name" placeholder="Name"/>
        <x-input-error class="mt-2" :messages="$errors->get('name')"/>
    </div>
    <div>
        <x-input-label for="email" :value="__('Email')" class="font-semibold"/>
        <x-text-input id="email" name="email" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" :value="old('email', $user?->email)" autocomplete="email" placeholder="Email"/>
        <x-input-error class="mt-2" :messages="$errors->get('email')"/>
    </div>
    <div>
        <x-input-label for="password" :value="__('Password')" class="font-semibold"/>
        <x-text-input id="password" name="password" type="password" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" autocomplete="new-password" placeholder="Password"/>
        <x-input-error class="mt-2" :messages="$errors->get('password')"/>
    </div>
    <div>
        <x-input-label for="admin" :value="__('Admin')" class="font-semibold"/>
        <x-text-input id="admin" name="admin" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" :value="old('admin', $user?->admin)" autocomplete="admin" placeholder="Admin"/>
        <x-input-error class="mt-2" :messages="$errors->get('admin')"/>
    </div>
    <div>
        <x-input-label for="centros_id" :value="__('Centros Id')" class="font-semibold"/>
        <x-text-input id="centros_id" name="centros_id" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" :value="old('centros_id', $user?->centros_id)" autocomplete="centros_id" placeholder="Centros Id"/>
        <x-input-error class="mt-2" :messages="$errors->get('centros_id')"/>
    </div>

    <div class="flex items-center gap-4">
        <x-primary-button class="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">Submit</x-primary-button>
    </div>
</div>