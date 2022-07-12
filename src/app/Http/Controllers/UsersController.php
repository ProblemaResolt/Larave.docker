<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\User;

class UsersController extends Controller
{
    protected $user;

    /**
     * コンストラクタ
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * 画面表示件データ一件取得用
     */
    public function getEdit($id)
    {
        $user = $this->user->selectUserFindById($id);
        // 'users.edit'は後程作成するviewを指定しています。
        return view('users.edit', compact('user'));
    }

    public function update(UpdateBlogRequest $request, User $user)
    {
        $request->validate([
            'title' => ['required'],
            'content' => ['required']
        ]);
        $user->update($request->all());
        return redirect()->route('blog.index');
    }
}
