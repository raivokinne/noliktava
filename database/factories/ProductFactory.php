<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'price' => fake()->randomFloat(2, 10, 1000),
            'description' => fake()->sentence(),
            'image' => fake()->imageUrl(),
            'active' => true,
            'condition' => 'new',
            'stock' => fake()->numberBetween(0, 100),
            'supplier_id' => fake()->numberBetween(1, 10),
            'shelf_id' => fake()->numberBetween(1, 10),
            'storage_id' => fake()->numberBetween(1, 10),
        ];
    }
}
