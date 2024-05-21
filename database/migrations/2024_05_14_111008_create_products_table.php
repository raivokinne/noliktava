<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(
            'products',
            function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('description');
                $table->float('price');
                $table->string('image');
                $table->foreignId('supplier_id')->constrained('suppliers');
                $table->integer('stock');
                $table->boolean('active')->default(true);
                $table->enum('condition', ['new', ' barley used ', 'used'])->default('new');
                $table->softDeletes();
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
