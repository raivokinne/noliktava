<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return Inertia::render('Orders/Index', compact('orders'));
    }

    public function show($id)
    {
        $order = Order::find($id);
        return Inertia::render('Orders/Show', compact('order'));
    }

    public function create()
    {
        return Inertia::render('Orders/Create');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'order_date' => 'required',
                'shipping_date' => 'nullable',
                'delivery_date' => 'nullable',
                'order_status' => 'required',
                'total_amount' => 'required',
                'payment_method' => 'required',
                'shipping_address' => 'required',
                'billing_address' => 'required',
                'shipping_cost' => 'required',
                'tax_amount' => 'required',
                'discount_amount' => 'required',
                'tracking_number' => 'nullable',
            ]
        );

        $request['user_id'] = auth()->user()->id;

        Order::create($request->all());

        return redirect()->route('order.index');
    }

    public function destroy($id)
    {
        $order = Order::find($id);
        $order->delete();
        return redirect()->route('order.index');
    }
}
