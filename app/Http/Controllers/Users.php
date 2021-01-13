<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facaces\Http;
use Illuminate\Http\JsonResponse;

class Users extends Controller
{
  protected function index(Request $req): JsonResponse {
    $client = new Client();

    $A = $client -> request($req-> method(),'https://jsonplaceholder.typicode.com/posts');
    console_log($A);
    return response($A -> getBody()) -> headers('Content-Type', 'application/json');
  }
    //
}
