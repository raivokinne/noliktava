<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Reports;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Product/Index', compact('products'));
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

    public function create()
    {
        return Inertia::render('Product/Create');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|min:3|max:255',
                'description' => 'required|min:3|max:255',
                'price' => 'required|decimal',
                'image' => 'required|string',
                'stock' => 'required',
                'active' => 'required',
                'condition' => 'required',
            ]
        );
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $request->image;
        $product->stock = $request->stock;
        $product->active = $request->active;
        $product->condition = $request->condition;
        $product->save();
        Reports::create(
            [
                'user_id' => auth()->user()->id,
                'description' => $product->name . ' was created by ' . auth()->user()->name,
                'date' => now(),
                'name' => 'Product Create',
            ]
        );
        return redirect()->route('Product.index');
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        Reports::create(
            [
                'user_id' => auth()->user()->id,
                'description' => $product->name . ' was deleted by ' . auth()->user()->name,
                'date' => now(),
                'name' => 'Product Delete',
            ]
        );
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
                'stock' => 'required',
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

        Reports::create(
            [
                'user_id' => auth()->user()->id,
                'description' => $product->name . ' was edited by ' . auth()->user()->name,
                'date' => now(),
                'name' => 'Product Edit',
            ]
        );
        return redirect()->route('Product.index');
    }
}
