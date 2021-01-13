<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link 
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" 
        rel="stylesheet">

        <!-- Styles -->
        <style>
            /* ! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
            </style>
            <link href="{{ asset('css/app.css')}}" rel='stylesheet' type='text/css'/>
            <link href="{{ asset('css/example.css')}}" rel='stylesheet' type='text/css'/>

<style>
            body {
                font-family: 'Nunito';
            }
           
        </style>
    </head>
    <body>
        <div id="root"></div>
            <script src="{{ asset('js/app.js')}}"></script>
    </body>
</html>
