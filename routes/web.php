<?php

use App\Http\Controllers\NewsController;
use App\Models\News;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get(
    '/',
    [NewsController::class, 'index']
);

Route::post(
    '/news',
    [NewsController::class, 'store']
)->middleware(['auth', 'verified'])->name('crate.news');

Route::get(
    '/news/edit',
    [NewsController::class, 'edit']
)->middleware(['auth', 'verified'])->name('edit.news');

Route::post(
    '/news/update',
    [NewsController::class, 'update']
)->middleware(['auth', 'verified'])->name('crate.news');

Route::post(
    '/news/delete',
    [NewsController::class, 'destroy']
)->middleware(['auth', 'verified'])->name('delete.news');

Route::get(
    '/dashboard',
    [NewsController::class, 'show']
)->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
