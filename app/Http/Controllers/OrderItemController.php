<?php

namespace App\Http\Controllers;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderItemController extends Controller
{
    public function index()
    {
        return Inertia::render('OrderItem/Index');
    }


    public function show($id)
    {
        $product = OrderItem::find($id);
        return Inertia::render('OrderItem/Show', compact('orderitem'));
    }

    public function destroy($id)
    {
        $product = OrderItem::find($id);
        $product->delete();
        return redirect()->route('OrderItem.index');
    }

    public function create()
    {
        return Inertia::render('OrderItem/Create');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'order_id' =>'required', 
               'product_id' =>'required',
               'quantity' =>'required',
               'price' =>'required|decimal',
               'total' =>'required'
            ]
        );

        $request['user_id'] = auth()->user()->id;

        OrderItem::create($request->all());

        return redirect()->route('OrderItem.index');
    }

}
