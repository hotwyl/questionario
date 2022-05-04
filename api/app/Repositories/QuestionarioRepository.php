<?php

namespace App\Repositories;

use App\Models\Questionario;
use App\Models\Pergunta;
use App\Models\Alternativa;
use App\Models\Resultado;
use App\Models\Resultado_Detalhe;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class QuestionarioRepository extends Questionario {

//Questionários

    public function obter($id) {
        return $this->with("perguntas")->find($id);
    }

    public function listar() {
        return Questionario::with('perguntas')->get();
    }

    public function salvar($salvarQuestionario) {
        if (isset($salvarQuestionario['id'])){
            $questionario = self::firstOrNew(['id' => $salvarQuestionario['id']]);
        }else{
           $questionario = new Questionario; 
        }
        $questionario->fill($salvarQuestionario);
        $questionario->save();
        return $questionario;
    }

    public function deletar($id) {
        return $this->destroy($id);
    }

    public function relatorioID($id) {
        return Resultado::with('resultado_detalhe')->find($id);
    }

    public function relatorio() {
        return Resultado::with('resultado_detalhe')->all();
    }

//Perguntas

    public function salvarPergunta($salvarPergunta) {

        if(isset($salvarPergunta['id'])){
            $pergunta = Pergunta::firstOrNew(['id' => $salvarPergunta['id']]);
        }else{
            $pergunta = new Pergunta;
        }

        $pergunta->fill($salvarPergunta);
        $pergunta->save();

        if(!isset($salvarPergunta['id'])){ 
            foreach($salvarPergunta['alternativa'] as $alternativa) {
                $alternativa["id_pergunta"] = $pergunta['id'];
                //dd($alternativa);
                $this->salvarAlternativa($alternativa);
            }
        }

        return $pergunta;
    }

    public function listarPergunta() {
        return Pergunta::with('respostas')->get();
    }

    public function obterPergunta($id) {
        return Pergunta::with('respostas')->find($id);
    }    

    public function deletarPergunta($id) {
        return Pergunta::destroy($id);
    }

//Alternativas

    public function salvarAlternativa($salvarAlternativa) {
        if(isset($salvarAlternativa['id'])){
            $alternativa = Alternativa::firstOrNew(['id' => $salvarAlternativa['id']]);
        }else{
            $alternativa = new Alternativa([]);
        }
        $alternativa->fill($salvarAlternativa);
        //dd($alternativa);
        $alternativa->save();
        return $alternativa;
    }

    public function listarAlternativa() {
        return Alternativa::all();
    }

    public function obterAlternativa($id) {
        return Alternativa::find($id);
    }    

    public function deletarAlternativa($id) {
        return Alternativa::destroy($id);
    }

//Home

    public function homeExibir($id) {
        //dd('Chegou aqui exibir questionário Home');
        return Questionario::with('perguntas.respostas')->find($id);
    }

    public function homeSalvar($salvarDados) {

        $resultado = new Resultado; 
        $resultado->fill($salvarDados);
        $resultado->save();

        foreach($salvarDados['questoes'] as $questoes) {
            $questoes['id_questionario'] = $salvarDados['id_questionario'];
            $resultados = new Resultado_Detalhe; 
            $resultados->fill($questoes);
            $resultados->save();
        }

        return $resultado;
    }
    
}

?>