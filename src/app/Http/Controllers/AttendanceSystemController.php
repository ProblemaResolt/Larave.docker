<?php

namespace App\Http\Controllers;

use App\Models\AttendanceSystem;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

use Inertia\Inertia;

class AttendanceSystemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $attendanceSystem = AttendanceSystem::latest()->get();

        return Inertia::render('Attendance/Index', ['AttendanceSystem' => $attendanceSystem]);


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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AttendanceSystem  $attendanceSystem
     * @return \Illuminate\Http\Response
     */
    public function destroy(AttendanceSystem $attendanceSystem)
    {
        //
    }
}
