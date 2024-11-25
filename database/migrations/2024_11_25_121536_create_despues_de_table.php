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
        Schema::create('despues_de', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('registros_id')->unsigned()->index();
            $table->foreign('registros_id')->references('id')->on('registros')->onDelete('cascade');
            $table->float('nivel_llenado_final')->nullable();
            $table->string('fotografias_finales')->nullable();
            $table->text('observaciones_finales')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('despues_de');
    }
};
