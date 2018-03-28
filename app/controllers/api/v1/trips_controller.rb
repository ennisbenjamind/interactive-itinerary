class Api::V1::TripsController < ApiController
  before_action :authenticate!
  
  def show
    trip = Trip.find(params[:id])
    lodgings = trip.lodgings
    events = trip.events
    render json: {trip: trip, lodgings: lodgings, events: events}
  end

  def index
    if current_user
      trips = current_user.trips
    elsif current_host
      trips = current_host.trips
    end
    render json: {trips: trips}
  end

end
