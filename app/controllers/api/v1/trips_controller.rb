class Api::V1::TripsController < ApiController

  def index
    render json: {trips: Trip.all}
  end

end
