<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\Reports;
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

    public function create()
    {
        return Inertia::render('OrderItem/Create');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'order_id' => 'required',
                'product_id' => 'required',
                'quantity' => 'required',
                'price' => 'required|decimal',
                'total' => 'required'
            ]
        );

        $request['user_id'] = auth()->user()->id;

        OrderItem::create($request->all());

        Reports::create(
            [
                'user_id' => auth()->user()->id,
                'description' => auth()->user()->name . ' created an order item',
                'date' => now(),
                'name' => 'Order Item Create',
            ]
        );

        return redirect()->route('OrderItem.index');
    }
}
