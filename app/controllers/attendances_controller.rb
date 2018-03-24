class AttendancesController < ApplicationController

  before_action :authenticate_user!

  def new
    @attendance = Attendance.new
  end

  def create
    @trip = attendance_params[:trip_id]
    @attendance = Attendance.new(trip_id: @trip.to_i, user_id: current_user.id)
    if @attendance.save
      flash[:success] = 'Trip joined!'
      redirect_to root_path
    else
      flash[:errors] = @question.errors.full_messages.join(', ')
      render :new
    end
  end

  def attendance_params
    params.require(:attendance).permit(:trip_id)
  end
end
