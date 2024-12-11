<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if (session('token'))
    <meta name="auth-token" content="{{  session('token') }}">
    <meta name="user" content="{{  session('user')->id }}">
    @endif

    <title>Ecovida</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />


    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css']) <!-- Esto injecta el js -->
</head>
@include('layouts.navigation')
    <div id="app">
    </div>
    @if (session('token'))
    <script>
        const authToken = document.querySelector('meta[name="auth-token"]').getAttribute('content');
        const user = document.querySelector('meta[name="user"]').getAttribute('content');
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('user', user);
        sessionStorage.clear()
        location.reload()
    </script>
    @endif
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

</html>