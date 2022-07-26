<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendance', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_id');
            $table->string('status')->nullable();
            $table->text('note')->nullable();
            $table->integer('transportation_costs')->nullable();
            $table->dateTime('panch_in')->nullable();
            $table->dateTime('panch_out')->nullable();
            $table->dateTime('working_time')->nullable();
            $table->dateTime('break_time')->nullable();
            $table->integer('last_activity')->index();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendance');
    }
};
