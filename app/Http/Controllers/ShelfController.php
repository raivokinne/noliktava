<?php

namespace App\Http\Controllers;

use App\Models\Shelf;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShelfController extends Controller
{
    public function index() {

        return Inertia::render('Shelf/Index');

    }
    public function create() {
        return Inertia::render('Shelf/Create');
    }
    public function store(Request $request)
     {
       $request->validate(
        [
            "name" => 'required|min:3|max:225',
            "product_id" => 'required',
            "storage_id"=> 'reduired',
            ]
        );
        $shelf = new Shelf();
        $shelf->name =$request->name;
        $shelf->active = 1;
        $shelf->user_id = auth()->user()->id;
        $shelf->product_id = $request->product_id;
        $shelf->storage_id = $request->storage_id;
        $shelf->save();
        return redirect()->route('shelf.index');
    }
    public function update(Request $request, $id)
    {
        $request->validate(
            [
                "name" => 'required|min:3|max:225',
                "product_id" => 'required',
                "storage_id"=> 'reduired',

            ]
                
            );

            $shelf = new Shelf();
            $shelf->name =$request->name;
            $shelf->active = 1;
            $shelf->user_id = auth()->user()->id;
            $shelf->product_id = $request->product_id;
            $shelf->storage_id = $request->storage_id;
            $shelf->save();
            return redirect()->route('shelf.index');
    }
}
