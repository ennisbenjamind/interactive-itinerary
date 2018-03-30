class TripsController < ApplicationController

  before_action :authenticate_host!

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.expenses = 0
    @trip.host_id = current_host.id
    if @trip.save
      flash[:success] = 'Trip created!'
      redirect_to root_path
    else
      flash[:errors] = @trip.errors.full_messages.join(', ')
      render :new
    end
  end

  def index
    @trips = current_host.trips
    if @trips == []
      flash[:errors] = "You are not currently hosting any trips"
      redirect_to root_path
    end
  end

  def edit
    @trip = Trip.find(params[:id])
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      flash[:success] = "Successfuly updated trip!"
      redirect_to trips_path
    else
      flash[:errors] = @trip.errors.full_messages.join(', ')
      render :edit
  end
end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    redirect_to trips_path
    flash[:notice] = "The trip has been deleted."
  end


  def trip_params
    params.require(:trip).permit(:name, :start_date, :end_date, :password)
  end

end
