<?php

namespace App\Http\Controllers;

use App\Services\QuestionarioService;
use Illuminate\Http\Request;



class QuestionarioController extends Controller {

    public function __construct(QuestionarioService $service) {
        $this->service = $service;
    }

 //questionário

    public function obter($id) {
        return $this->service->obter($id);
    }
    
    public function listar() {
        return $this->service->listar();
    }
    
    public function salvar(Request $request) {
        return $this->service->salvar($request->all()); 
    } 

    public function deletar($id) {
        return $this->service->deletar($id);
    }

    public function relatorioID($id) {
        return $this->service->relatorioID($id);
    }

    public function relatorio() {
        return $this->service->relatorio();
    }

 //pergunta

    public function obterPergunta($id) {
        return $this->service->obterPergunta($id);
    }

    public function listarPergunta() {
        return $this->service->listarPergunta();
    }

    public function salvarPergunta(Request $request) {
       return $this->service->salvarPergunta($request->all()); 
    } 

    public function deletarPergunta($id) {
        return $this->service->deletarPergunta($id);
    }

//Alternativa

    public function obterAlternativa($id) {
        return $this->service->obterAlternativa($id);
    }

    public function listarAlternativa() {
        return $this->service->listarAlternativa();
    }

    public function salvarAlternativa(Request $request) {
        return $this->service->salvarAlternativa($request->all()); 
    } 

    public function deletarAlternativa($id) {
        return $this->service->deletarAlternativa($id);
    }

//Home

    public function homeExibir($id) {
        return $this->service->homeExibir($id);
    }

    public function homeSalvar(Request $request) {
        return $this->service->homeSalvar($request->all()); 
    } 

}

?>