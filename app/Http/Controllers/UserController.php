<?php

namespace App\Http\Controllers;

// use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facaces\Http;
// use Illuminate\Http\JsonResponse;
use Illuminate\Http\Client\Response;
use GuzzleHttp\Client;

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
      $result = $this -> helper($req);
      // return $reponse->json();
      return response($result -> getBody(), $result-> getStatusCode())->header('Content-Type', 'application/json');
    }
}
