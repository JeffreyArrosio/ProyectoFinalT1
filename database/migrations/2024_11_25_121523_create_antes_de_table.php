<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('antes_de', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('registros_id')->unsigned()->index();
            $table->foreign('registros_id')->references('id')->on('registros')->onDelete('cascade');
            $table->integer('temperatura_ambiental')->nullable();
            $table->integer('temperatura_compostera')->nullable();
            $table->float('nivel_llenado_inicial')->nullable();
            $table->string('olor')->nullable();
            $table->enum('presencia_insectos', ['si', 'no'])->nullable();
            $table->enum('humedad', ['Exceso', 'Buena', 'Defecto'])->nullable();
            $table->string('fotografias_iniciales')->nullable();
            $table->text('observaciones_iniciales')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('antes_de');
    }
};
