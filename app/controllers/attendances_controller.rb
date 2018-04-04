class AttendancesController < ApplicationController

  before_action :authenticate_user!

  def new
    @attendance = Attendance.new
  end

  def create
    @password = password_params[:password]
    @password_validation = Trip.find_by(password: @password )
    @trip = attendance_params[:trip_id]
    if !@password_validation || @password_validation.id != @trip.to_i
      flash[:errors] = 'Invalid Trip Password and/or Trip ID'
      redirect_to root_path
    else
      @attendance = Attendance.new(trip_id: @trip.to_i, user_id: current_user.id)
      if
        @attendance.save
        flash[:success] = 'Trip joined!'
        redirect_to root_path
      else
        flash[:errors] = @attendance.errors.full_messages.join(', ')
        redirect_to root_path
      end
    end
  end

  def attendance_params
    params.require(:attendance).permit(:trip_id)
  end

  def password_params
    params.slice(:password)
  end
end
