<?php

namespace App\Models;

use App\Models\Alternativa;

use Illuminate\Database\Eloquent\Model;

class Pergunta extends Model {

    protected $table = 'perguntas';

    protected $fillable = [
        'id',
        'questao',
        'pontuacao',
        'id_questionario' 
    ];

    public function respostas() {
        return $this->hasMany(Alternativa::class, 'id_pergunta' , 'id' );
    }

    public $timestamps = false;
}

?>