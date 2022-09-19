<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{

    public function index()
    {
        return Post::paginate(5);

    }

    public function store(Request $request)
    {
       return Post::create($request->all());
    }

    public function show($id)
    {
        return Post::findOrFAil($id);
    }

    public function update(Request $request, $id)
    {

    }
    public function destroy($id)
    {

    }
}
