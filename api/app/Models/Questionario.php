<?php

namespace App\Models;

use App\Models\Pergunta;

use Illuminate\Database\Eloquent\Model;

class Questionario extends Model {

    protected $table = 'questionarios';

    protected $fillable = [
        'id',
        'titulo',
        'descricao',
        'ativo',
        'inicio_questionario',
        'limite_questionario'
    ];

    public function perguntas() {
        return $this->hasMany(Pergunta::class, 'id_questionario', 'id');
    }

    public $timestamps = false;
    
}

?>