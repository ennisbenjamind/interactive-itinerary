class Api::V1::LodgingsController < ApiController

  def index
    render json: Lodging.all
  end

  def show
    lodging = Lodging.find(params[:id])
    render json: lodging
  end

  def create
    trip = Trip.find_by(id: lodging_params[:trip_id])
    lodging = Lodging.new(lodging_params)
    trip.expenses += lodging.expense
    if lodging.save
      trip.save
      render json: { lodgings: Lodging.all }
    else
      render json: { errors: lodging.errors.full_messages }
    end
  end

  def destroy
    lodging = Lodging.find(params[:id])
    trip = lodging.trip
    trip.expenses -= lodging.expense
    trip.save
    lodging.destroy
  end

  def lodging_params
    params.require(:lodging).permit(:name, :check_in_time, :check_out_time, :check_in_date, :check_out_date, :address, :expense, :trip_id)
  end
end
