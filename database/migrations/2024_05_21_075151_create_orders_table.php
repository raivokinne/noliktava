<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(
            'orders', function (Blueprint $table) {
                $table->id();
                $table->timestamp('order_date')->useCurrent();
                $table->timestamp('shipping_date')->nullable();
                $table->timestamp('delivery_date')->nullable();
                $table->string('order_status', 50);
                $table->decimal('total_amount', 10, 2);
                $table->string('payment_method', 50);
                $table->string('shipping_address', 255);
                $table->decimal('shipping_cost', 10, 2)->default(0.0);
                $table->string('tracking_number', 100)->nullable();
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
