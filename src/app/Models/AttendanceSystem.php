<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendanceSystem extends Model
{
    use HasFactory;
    //table 指定
    public mixed $id;
    protected $table = 'attendance';

    protected $fillable = [
        'id',
        'user_id',
        'status',
        'note',
        'transportation_costs',
        'punch_in',
        'punch_out',
        'working_time',
        'break_time',
        'last_activity'
    ];


    public function user() {
        return $this->belongsTo(User::class);
    }
}
