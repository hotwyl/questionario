<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultadoDetalhesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resultado_detalhe', function (Blueprint $table) {
            $table->id('id');
            $table->integer('id_questionario');
            $table->integer('id_pergunta');
            $table->integer('id_respostaPergunta');
            $table->integer('valorPergunta');
            $table->integer('id_alternativaCorreta');
            $table->integer('nota_obitidaQuestao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resultado_detalhe');
    }
}
