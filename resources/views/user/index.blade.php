<x-app-layout>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-6 bg-green-200 dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="w-full">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <h1 class="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">Usurarios</h1>
                            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">Lista de todos los usuarios:</p>
                        </div>
                        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <a type="button" href="{{ route('users.create') }}" class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add new</a>
                        </div>
                    </div>

                    <div class="flow-root mt-6">
                        <div class="overflow-x-auto">
                            <div class="inline-block min-w-full py-2 align-middle">
                                <table class="w-full divide-y divide-gray-300 dark:divide-gray-700 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
                                    <thead class="bg-gray-100 dark:bg-gray-900">
                                    <tr>
                                        <th scope="col" class="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Id</th>
                                        <th scope="col" class="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Nombre</th>
                                        <th scope="col" class="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Email</th>
                                        <th scope="col" class="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">Admin</th>
                                        <th scope="col" class="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">IdCentros</th>
                                        <th scope="col" class="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400"></th>
                                    </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                                    @foreach ($users as $user)
                                        <tr class="even:bg-gray-50 dark:even:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 dark:text-gray-100">{{ ++$i }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{{ $user->name }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{{ $user->email }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{{ $user->admin ? 'Sí' : 'No' }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{{ $user->centros_id }}</td>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                <form action="{{ route('users.destroy', $user->id) }}" method="POST">
                                                    <a href="{{ route('users.show', $user->id) }}" class="text-gray-600 dark:text-gray-300 font-bold hover:text-gray-900 dark:hover:text-gray-100 mr-2">{{ __('Show') }}</a>
                                                    <a href="{{ route('users.edit', $user->id) }}" class="text-indigo-600 dark:text-indigo-300 font-bold hover:text-indigo-900 dark:hover:text-indigo-100 mr-2">{{ __('Edit') }}</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <a href="{{ route('users.destroy', $user->id) }}" class="text-red-600 dark:text-red-300 font-bold hover:text-red-900 dark:hover:text-red-100" onclick="event.preventDefault(); confirm('¿Estas seguro de que quieres eleiminar este usuario?') ? this.closest('form').submit() : false;">{{ __('Delete') }}</a>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>

                                <div class="mt-4 px-4">
                                    {!! $users->withQueryString()->links() !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>