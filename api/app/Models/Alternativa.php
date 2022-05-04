<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alternativa extends Model  {

    protected $table = 'respostas';

    protected $fillable = [
        'id',
        'alternativa',
        'correta',
        'id_pergunta' 
    ];

    public function perguntas() {
        return $this->belongsTo(Pergunta::class, 'id_pergunta' , 'id' );
    }

    public $timestamps = false;

}
?>