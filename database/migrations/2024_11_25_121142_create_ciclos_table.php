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
        Schema::create('ciclos', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_inicio');
            $table->date('fecha_fin')->nullable();
            $table->boolean('terminado')->default(false);
            $table->bigInteger('bolos_id')->unsigned()->index();
            $table->foreign('bolos_id')->references('id')->on('bolos')->onDelete('cascade');
            $table->bigInteger('composteras_id')->unsigned()->index();
            $table->foreign('composteras_id')->references('id')->on('composteras')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ciclos');
    }
};
