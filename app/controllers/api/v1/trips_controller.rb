class Api::V1::TripsController < ApiController
  before_action :authenticate!

  def show
    trip = Trip.find(params[:id])
    lodgings = trip.lodgings
    events = trip.events
    users = trip.users
    host = Host.find_by(id: trip.host_id)
    render json: {trip: trip, lodgings: lodgings, events: events, users: users, host: host}
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
