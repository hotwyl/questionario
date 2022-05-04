<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resultado extends Model {

    protected $table = 'resultado';

    protected $fillable = [
        'id',
        'usuario',
        'id_questionario',
        'data',
        'total_notas'
    ];

    public function resultado_detalhe() {
        return $this->hasMany(Resultado_Detalhe::class, 'id_questionario' , 'id' );
    }
    public $timestamps = false;

}
