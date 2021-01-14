<?php

namespace App\Http\Controllers;

// use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facaces\Http;
// use Illuminate\Http\JsonResponse;
use Illuminate\Http\Client\Response;
use GuzzleHttp\Client;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  // protected function index(Request $req): JsonResponse {
  //   $client = new Client();

  //   $A = $client -> request($req-> method(),'https://jsonplaceholder.typicode.com/posts');
  //   console_log($A);
  //   return response($A -> getBody()) -> headers('Content-Type', 'application/json');
  // }
  //   function index(Request $req): JsonResponse {
  //   $client = new Client();

  //   $A = $client -> request($req-> method(),'https://jsonplaceholder.typicode.com/posts');
  //   console_log($A);
  //   // return response($A -> getBody()) -> headers('Content-Type', 'application/json');
  //   return 'hello';

  // }
  // $username = $req->username;
  // $user = new User();
  // $user->name = $username;
  // $user.save();

  
  
  public function updatePassword(Request $request) {
    $request -> user() -> fill([
      'password' => Hash::make($request -> newPassword)
    ])-> save();
  }

  public function all(Request $req) {
    $all = DB::select('select * from users');
    return response([ 'all'=> $all ]);
  }

  public function register(Request $req) {
    $username = $req->username;
    $password = $req->password;
    $user = new User();
    console_log($username);
    $user -> password = Hash::make($password, [
      'rounds' => 12
    ]);
    // $user -> api_token = $req -> header();
    // console_log($user -> api_token -> x-xsrf-token);
    $user -> name = $username;
    // console_log($req);
    $user -> save();
    $this -> updatePassword($req);
    // $users = DB::insert('insert into users (name) values (?)', [$username]);
    return response(['user' => $username]);
  }

  public function helper(Request $req) {
    $requestConfig= [
      'headers' => [
        'Content-Type' => 'application/json'
      ]
    ];
    $client = new Client();
    $result = $client -> request($req -> method(), 'https://jsonplaceholder.typicode.com/posts');
    return $result;
  }
  public function index(Request $req){
    $result = $this -> helper($req);
    return response($result -> getBody(), $result-> getStatusCode())->header('Content-Type', 'application/json');
  }
}

// $data = Http::get('https://jsonplaceholder.typicode.com/posts')
// ->json();
// return reponse($data);
// console_log('hi');
// return Http::get('http://example.com')->body();
// return $response -> json();
// return $data->json();

// console_log(response() -> json());

// return ['a' => 1, 'b' => 2];
// $response = Http::get('');
// return $reponse->json();