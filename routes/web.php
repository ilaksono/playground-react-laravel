<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/', function () {
//     return view('index');
// });

// Route::get('/hi', function () {
//     return view('index');
// });
// Route::get('/users', function() {
//   $A = Http::get('https://jsonplaceholder.typicode.com/posts');

//   console_log($A, 'hi');
//   return response()
//   -> json($A);
//   // ->view('index',$A, 200);
//   //  ->header('Content-Type', 'application/json');
// });


Route::get('/api/users', 'Users@index');
Route::view('/{path?}', 'index');
