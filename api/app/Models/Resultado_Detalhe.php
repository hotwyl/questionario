<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resultado_Detalhe extends Model
{
    protected $table = 'resultado_detalhe';

    protected $fillable = [
        'id_questionario',
        'id_pergunta',
        'id_respostaPergunta',
        'valorPergunta',
        'id_alternativaCorreta',
        'nota_obitidaQuestao'
    ];

    public $timestamps = false;

}