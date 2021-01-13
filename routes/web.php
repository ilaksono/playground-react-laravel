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
Route::get('/users', function() {
  $A = Http::get('https://jsonplaceholder.typicode.com/posts')->json();
  console_log($A);
  return response()->view('index',$A, 200)
   ->header('Content-Type', 'application/json');
});

Route::view('/{path?}', 'index');
