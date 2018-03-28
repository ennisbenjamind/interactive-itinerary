class Api::V1::LodgingsController < ApiController

  def index
    render json: Lodging.all 
  end

  def create
    lodging = Lodging.new(lodging_params)
    if lodging.save
      render json: { lodgings: Lodging.all }
    else
      render json: { errors: lodging.errors.full_messages }
    end
  end

  def lodging_params
    params.require(:lodging).permit(:name, :check_in_time, :check_out_time, :check_in_date, :check_out_date, :address, :expense, :trip_id)
  end
end
