<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content'
    ];

    // システム系以外のカラムは、自由にinsert/updateしてOK!
    protected $guarded = ['id','created_at','updated_at','deleted_at'];
    // 日付フォーマットがYYYY-MM-DDT00:00:00.000000Z(ISO8601)なので、Y-m-d H:i:sに変更
    protected function serializeDate(\DateTimeInterface $date)
    {
        return $date->format('Y/m/d');
    }
    // 不要なカラムは表示させない
    protected $hidden = [
    ];
}
