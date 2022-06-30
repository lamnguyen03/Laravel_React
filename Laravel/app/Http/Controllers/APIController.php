<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
class APIController extends Controller
{
    public function getProduct(){
         $products = product :: all();
         return response()->json($products);
    }
}
