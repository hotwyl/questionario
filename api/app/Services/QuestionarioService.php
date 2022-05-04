<?php

namespace App\Services;
use App\Repositories\QuestionarioRepository;
use Carbon\Carbon;
use DateTime;

class QuestionarioService {

    public function __construct(QuestionarioRepository $repository) {
        $this->repository = $repository;
    }

 //qustionario

    public function obter($id) {
        return $this->repository->obter($id);
    }

    public function listar() {
        return $this->repository->listar();
    }

    public function salvar($salvarQuestionario) {
        return $this->repository->salvar($salvarQuestionario);
    }

    public function deletar($id) {
        return $this->repository->deletar($id);
    }

    public function relatorioID($id) {
        return $this->repository->relatorioID($id);
    }

    public function relatorio() {
        return $this->repository->relatorio();
    }

 //pergunta
    
    public function obterPergunta($id) {
        return $this->repository->obterPergunta($id);
    }

    public function listarPergunta() {
        return $this->repository->listarPergunta();
    }

    public function salvarPergunta($salvarPergunta) {
        return $this->repository->salvarPergunta($salvarPergunta);
    }

    public function deletarPergunta($id) {
        return $this->repository->deletarPergunta($id);
    }

//Alternativas

    public function obterAlternativa($id) {
        return $this->repository->obterAlternativa($id);
    }

    public function listarAlternativa() {
        return $this->repository->listarAlternativa();
    }

    public function salvarAlternativa($salvarAlternativa) {
        return $this->repository->salvarAlternativa($salvarAlternativa);
    }

    public function deletarAlternativa($id) {
        return $this->repository->deletarAlternativa($id);
    }

//Home

    public function homeExibir($id) {
        return $this->repository->homeExibir($id);
    }

    public function homeSalvar($salvarDados) {

        //tratamento data
        date_default_timezone_set('America/Sao_Paulo');
        $now = new DateTime();
        $data = $now->format('Y-m-d H:i:s');
        $salvarDados["data"] = $data;       

        //tratamento questão
        $total_notas = 0;
        
        foreach($salvarDados['questoes'] as $contator => $questoes) {
            
            //chamando função para trazer informações perguntas do questionario
            $arQuestao = $this->repository->obterPergunta($questoes['id_pergunta']);
            
            //identificando alternativa correta
            foreach($arQuestao['respostas'] as $respostas) {
                if ($respostas['correta']==1){
                    $id_alternativaCorreta = $respostas['id'];;
                }
            }
            
            //atribuindo valor a variavel para exibir valor questão
            $salvarDados['questoes'][$contator]["valorPergunta"] =  $arQuestao['pontuacao'];
            $salvarDados['questoes'][$contator]["id_alternativaCorreta"] =  $id_alternativaCorreta;
            //dd($questoes);

            //recebendo nota pela alternativa respondida
            if ($questoes['id_respostaPergunta'] == $id_alternativaCorreta ){
                $questoes["nota_obitidaQuestao"] = $arQuestao['pontuacao'];
            } else {
                $questoes["nota_obitidaQuestao"] = 0;
            }

            //concatenanco nota obtida
            $salvarDados['questoes'][$contator]["nota_obitidaQuestao"] = $questoes["nota_obitidaQuestao"];

            //somando nota total
            $total_notas =  $total_notas + $questoes["nota_obitidaQuestao"];
        }
        
        //concatenando valor nota total array
        $salvarDados["total_notas"] = $total_notas;
        //dd($salvarDados);

        //retornando array com informações processadas
        return $this->repository->homeSalvar($salvarDados); 
    } 

 }

?>