<x-app-layout>
    <div class="py-12 flex justify-center">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="w-full flex justify-center">
                    <div class="sm:flex sm:items-center">
                        <div class="mt-4 sm:mt-0 sm:flex-none">
                            <div class="flow-root mt-6">
                                <div class="overflow-x-auto">
                                    <div class="max-w-xl text-center py-2 align-middle">
                                        <form method="POST" action="{{ route('users.store') }}" role="form" enctype="multipart/form-data">
                                            {{ method_field('PATCH') }}
                                            @csrf
                                            @include('user.form')
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <a href="{{ route('users.index') }}" class="block mt-4 rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
