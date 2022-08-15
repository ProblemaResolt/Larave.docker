<?php

namespace App\Http\Controllers;

use App\Models\AttendanceSystem;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class AttendanceSystemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        $attendance = AttendanceSystem::whereMonth('created_at', date('m'))
        ->whereYear('created_at', date('Y'))
        ->latest()->get();
        return Inertia::render('Attendance/Index', ['attendance' => $attendance]);
        /*return Inertia::render(
            'Attendance/Index',
            [
                '$attendance' => AttendanceSystem::query()
                    ->when(Request::input('search'), function ($query, $search) {
                        $query->where('created_at', date('m'),'like', '%' . $search . '%')
                            ->OrWhere('created_at', date('Y'), 'like', '%' . $search . '%');
                    })->paginate(8)
                    ->withQueryString(),
            ]
        );*/


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Attendance/Create');
    }

    /**
     * punchIn a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function punchIn(): \Illuminate\Http\RedirectResponse
    {   $user = Auth::user();

        $oldTimestamp = AttendanceSystem::where('user_id', $user->id)->latest()->first();
        if ($oldTimestamp) {
            $oldTimestampPunchIn = new Carbon($oldTimestamp->punch_in);
            $oldTimestampDay = $oldTimestampPunchIn->startOfDay();
        }else{
            return $this->extracted();
        }

        $newTimestampDay = Carbon::today();

        if (($oldTimestampDay == $newTimestampDay) && (empty($oldTimestamp->punch_out))){
            return redirect()->back()->with('error', 'すでに出勤打刻がされています');
        }else{
            return $this->extracted();
        }
    }

    public function punchOut()
    {
        $user = Auth::user();
        $timestamp = AttendanceSystem::where('user_id', $user->id)->latest()->first();

        if( !empty($timestamp->punch_out)) {
            return redirect()->back()->with('error', '既に退勤の打刻がされているか、出勤打刻されていません');
        }else{

            $separator_time = 30;
            $date = Carbon::now();
            $nowDate = $date->subMinutes($date->minute % $separator_time);
            $oldDate = $timestamp->punch_in;
            $breakTime = $timestamp->break_time;
            $oldDateTime = strtotime($oldDate);
            $dateTime = strtotime($nowDate);
            $difSeconds = $dateTime - $oldDateTime;
            $hours = floor($difSeconds / 3600);
            $minutes = floor(($difSeconds / 60) % 60);
            $seconds = 00;
            $hms = sprintf("%02d:%02d:%02d", $hours, $minutes, $seconds);

            $timestamp->update([
                'punch_out' => $nowDate->format('Y/m/d H:i'),
                'working_time' => $hms
            ]);


            return redirect()->back()->with('my_status', '退勤打刻が完了しました');
        }
    }

    public function sickLeave()
    {
        $user = Auth::user();
        $oldTimestamp = AttendanceSystem::where('user_id', $user->id)->latest()->first();
        if ($oldTimestamp) {
            $oldTimestampPunchIn = new Carbon($oldTimestamp->punch_in);
            $oldTimestampDay = $oldTimestampPunchIn->startOfDay();
        };
        $newTimestampDay = Carbon::today();
        if (($oldTimestampDay == $newTimestampDay) && (empty($oldTimestamp->punch_out))){
            return redirect()->back()->with('error', 'すでに出勤打刻がされています');
        }else{
        $timestamp = AttendanceSystem::create([
            'status' => 2,
            'user_id' => request()->user()->id,
            'punch_in' => '1000-01-01 00:00:00',
            'punch_out' => '1000-01-01 00:00:00',
            'note' => ''
        ]);

        return Redirect::route('attendance.index');}
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): \Illuminate\Http\Response
    {
        AttendanceSystem::create(
            $request->validated()
        );

        return Redirect::route('attendance.index');
    }

    /**
     * Display the specified resource.
     *
     * @param AttendanceSystem $attendanceSystem
     * @return void
     */
    public function show(AttendanceSystem $attendanceSystem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param AttendanceSystem $attendanceSystem
     * @return Response
     */
    public function edit(AttendanceSystem $attendanceSystem): Response
    {
        return Inertia::render('AttendanceSystem/Edit', [
            'attendanceSystem' => [
                'id' => $attendanceSystem->id,
                'status' => $attendanceSystem->status,
                'note' => $attendanceSystem->note,
                'transportation_costs' => $attendanceSystem->transportation_costs,
                'punch_in' => $attendanceSystem->punch_in,
                'punch_out' => $attendanceSystem->punch_out,
                'working_time' => $attendanceSystem->working_time,
                'break_time' => $attendanceSystem->break_time
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param AttendanceSystem $attendanceSystem
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
     * @param AttendanceSystem $attendanceSystem
     * @return \Illuminate\Http\Response
     */
    public function destroy(AttendanceSystem $attendanceSystem)
    {
        $attendanceSystem->delete();

        return Redirect::route('attendance.index');
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function extracted(): \Illuminate\Http\RedirectResponse
    {
        $separator_time = 30;
        $date = Carbon::now();
        $nowDate = $date->addMinutes($separator_time - $date->minute % $separator_time);

        $timestamp = AttendanceSystem::create([
            'status' => 1,
            'user_id' => request()->user()->id,
            'punch_in' => $nowDate->format('Y/m/d H:i')
        ]);
        return redirect()->back()->with('my_status', '出勤打刻が完了しました');
    }
}
