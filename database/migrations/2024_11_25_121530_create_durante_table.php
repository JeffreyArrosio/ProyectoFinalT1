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
        Schema::create('durante', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('registros_id')->unsigned()->index();
            $table->foreign('registros_id')->references('id')->on('registros')->onDelete('cascade');
            $table->enum('riego',['si','no'])->nullable();
            $table->enum('revolver',['si','no'])->nullable();
            $table->integer('aporte_verde')->nullable();
            $table->string('tipo_aporte_verde')->nullable();
            $table->integer('aporte_seco')->nullable();
            $table->string('tipo_aporte_seco')->nullable();
            $table->string('fotografias_durante')->nullable();
            $table->text('observaciones_durante')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('durante');
    }
};
