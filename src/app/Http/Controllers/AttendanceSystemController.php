<?php

namespace App\Http\Controllers;

use App\Models\AttendanceSystem;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Carbon\Carbon;
use Inertia\Inertia;
use phpDocumentor\Reflection\DocBlock\Tags\Var_;

class AttendanceSystemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $attendance = AttendanceSystem::latest()->get();
        return Inertia::render('Attendance/Index', ['attendance' => $attendance]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Attendance/Create');
    }

    /**
     * punchIn a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function punchIn()
    {   $user = Auth::user();

        $oldTimestamp = AttendanceSystem::where('user_id', $user->id)->latest()->first();
        if ($oldTimestamp) {
            $oldTimestampPunchIn = new Carbon($oldTimestamp->panch_in);
            $oldTimestampDay = $oldTimestampPunchIn->startOfDay();
        }
        $separator_time = 30;
        $date = Carbon::now();
        $nowDate = $date->addMinutes($separator_time - $date->minute % $separator_time);

        $timestamp = AttendanceSystem::create([
            'status' => 1,
            'user_id' => request()->user()->id,
            'panch_in' => $nowDate->format('Y/m/d H:i')
        ]);
        return redirect()->back()->with('my_status', '出勤打刻が完了しました');

        $newTimestampDay = Carbon::today();

        if (($oldTimestampDay == $newTimestampDay) && (empty($oldTimestamp->panch_out))){
            return redirect()->back()->with('error', 'すでに出勤打刻がされています');
        }
        $separator_time = 30;
        $date = Carbon::now();
        $nowDate = $date->addMinutes($separator_time - $date->minute % $separator_time);

        $timestamp = AttendanceSystem::create([
            'status' => 1,
            'user_id' => request()->user()->id,
            'panch_in' => $nowDate->format('Y/m/d H:i')
        ]);
        return redirect()->back()->with('my_status', '出勤打刻が完了しました');
    }

    public function punchOut()
    {
        $user = Auth::user();
        $timestamp = AttendanceSystem::where('user_id', $user->id)->latest()->first();

        if( !empty($timestamp->panch_out)) {
            return redirect()->back()->with('error', '既に退勤の打刻がされているか、出勤打刻されていません');
        }else{

            $separator_time = 30;
            $date = Carbon::now();
            $nowDate = $date->subMinutes($date->minute % $separator_time);
            $oldDate = $timestamp->panch_in;
            $breakTime = $timestamp->break_time;
            $oldDateTime = strtotime($oldDate);
            $dateTime = strtotime($nowDate);
            $difSeconds = $dateTime - $oldDateTime;
            $hours = floor($difSeconds / 3600);
            $minutes = floor(($difSeconds / 60) % 60);
            $seconds = 00;
            $hms = sprintf("%02d:%02d:%02d", $hours, $minutes, $seconds);

            $timestamp->update([
                'panch_out' => $nowDate->format('Y/m/d H:i'),
                'working_time' => $hms
            ]);


            return redirect()->back()->with('my_status', '退勤打刻が完了しました');
        }
    }

    public function sickLeave()
    {
        $user = Auth::user();


        $timestamp = AttendanceSystem::create([
            'status' => 2,
            'user_id' => request()->user()->id,
            'panch_in' => '1000-01-01 00:00:00',
            'panch_out' => '1000-01-01 00:00:00',
            'note' => ''
        ]);

        return Redirect::route('attendance.index');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        AttendanceSystem::create(
            $request->validated()
        );

        return Redirect::route('attendance.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AttendanceSystem  $attendanceSystem
     * @return \Illuminate\Http\Response
     */
    public function show(AttendanceSystem $attendanceSystem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AttendanceSystem  $attendanceSystem
     * @return \Illuminate\Http\Response
     */
    public function edit(AttendanceSystem $attendanceSystem)
    {
        return Inertia::render('AttendanceSystem/Edit', [
            'attendanceSystem' => [
                'id' => $attendanceSystem->id,
                'status' => $attendanceSystem->status,
                'note' => $attendanceSystem->note,
                'transportation_costs' => $attendanceSystem->transportation_costs,
                'panch_in' => $attendanceSystem->panch_in,
                'panch_out' => $attendanceSystem->panch_out,
                'working_time' => $attendanceSystem->working_time,
                'break_time' => $attendanceSystem->break_time
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AttendanceSystem  $attendanceSystem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AttendanceSystem $attendanceSystem)
    {
        $attendanceSystem->update($request->validated());

        return Redirect::route('attendance.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AttendanceSystem  $attendanceSystem
     * @return \Illuminate\Http\Response
     */
    public function destroy(AttendanceSystem $attendanceSystem)
    {
        $attendanceSystem->delete();

        return Redirect::route('attendance.index');
    }
}
