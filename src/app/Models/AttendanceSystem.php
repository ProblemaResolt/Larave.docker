<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendanceSystem extends Model
{
    use HasFactory;
    //table 指定
    protected $table = 'attendance';

    protected $fillable = [
        'user_id',
        'status',
        'note',
        'transportation_costs',
        'panch_in',
        'panch_out',
        'working_time',
        'break_time'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
