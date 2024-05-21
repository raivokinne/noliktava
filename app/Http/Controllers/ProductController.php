<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
    //nevaig create , store
    public function index()
    {
        return Inertia::render('Product/Index');
    }
    public function edit($id)
    {
        $product = Product::find($id);
        return Inertia::render('Product/Edit', compact('product'));
    }

    public function show($id)
    {
        $product = Product::find($id);
        return Inertia::render('Product/Show', compact('product'));
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return redirect()->route('Product.index');
    }

    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'name' => 'required|min:3|max:255',
                'description' => 'required|min:3|max:255',
                'price' => 'required|decimal',
                'image' => 'required|string',
                'stock' =>'required',
                'active' => 'required'

            ]
        );
        $product = Product::find($id);
        $product->name = $request->name;
        // $product->active = 1;
        $product->user_id = auth()->user()->id;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $request->image;
        $product->stock = $request->stock;
        $product->active = $request->active;
        $product->save();
        return redirect()->route('Product.index');
    }

}
