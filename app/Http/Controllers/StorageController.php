<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageController extends Controller
{
    
    public function index() {

        return inertia::render('Storage/Index');

    }


}
