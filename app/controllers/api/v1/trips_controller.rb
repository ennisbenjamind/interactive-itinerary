class Api::V1::TripsController < ApiController
  before_action :authenticate!

  def index
    if current_user
      trips = current_user.trips
    elsif current_host
      trips = current_host.trips
    end
    render json: {trips: trips}
  end

end
