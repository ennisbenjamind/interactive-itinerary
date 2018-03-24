class TripsController < ApplicationController

  before_action :authenticate_host!

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.host_id = current_host.id
    if @trip.save
      flash[:success] = 'Trip created!'
      redirect_to root_path
    else
      flash[:errors] = @question.errors.full_messages.join(', ')
      render :new
    end
  end

  def trip_params
    params.require(:trip).permit(:name, :start_date, :end_date, :password)
  end
end
