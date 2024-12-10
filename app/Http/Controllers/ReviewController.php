<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index()
    {
        return Inertia::render('ReviewForm');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'feedback' => 'required|string|max:1000',
        ]);

        // Save to the database
        Review::create($validated);

        return response()->json(['message' => 'Thank you for your feedback!'], 200);
    }
}
