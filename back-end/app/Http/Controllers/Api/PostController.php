<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{

    public function index()
    {
        return Post::orderByDesc('created_at', 'ASC')->paginate(5);

    }

    public function store(Request $request)
    {
        $post = new Post();
        $destination_path = 'storage/images/posts';
        $post->username =$request->username;
        $post->category =$request->category;
        $post->text =$request->text;
        $image = $request->file('image');

        if($image) {
            $image_name = $image->getClientOriginalName();
            $post->image_url =url($request->file('image')->store($destination_path));
        }

        $post->save();


    }

    public function show($id)
    {
        return Post::findOrFAil($id);
    }

    public function update(Request $request, $id)
    {

        $post = Post::findOrFAil($id)->update($request->all());

        return response()->json(Post::findOrFail($id), 200);


    }
    public function destroy($id)
    {

        $post = Post::findOrFAil($id)->delete();

        return response()->json(null, 204);
 
    }
}
