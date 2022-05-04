<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('home')->group(function () {
    Route::get('/{id}','QuestionarioController@homeExibir');
    Route::post('/responder','QuestionarioController@homeSalvar');    
});

Route::prefix('questionario')->group(function () {
    Route::get('/','QuestionarioController@listar');
    Route::get('/{id}','QuestionarioController@obter');
    Route::post('/salvar','QuestionarioController@salvar');
    Route::delete('/deletar/{id}','QuestionarioController@deletar');
    Route::get('/relatorio','QuestionarioController@relatorio');
    Route::get('/relatorio/{id}','QuestionarioController@relatorioID');
    Route::prefix('pergunta')->group(function() {
        Route::get('/listar','QuestionarioController@listarPergunta');
        Route::get('/listar/{id}','QuestionarioController@obterPergunta');
        Route::post('/salvar','QuestionarioController@salvarPergunta');
        Route::delete('/deletar/{id}','QuestionarioController@deletarPergunta');
        Route::prefix('alternativa')->group(function() {
            Route::get('/listar','QuestionarioController@listarAlternativa');
            Route::get('/listar/{id}','QuestionarioController@obterAlternativa');
            Route::post('/salvar','QuestionarioController@salvarAlternativa');
            Route::delete('/deletar/{id}','QuestionarioController@deletarAlternativa');
        });
    });
});
