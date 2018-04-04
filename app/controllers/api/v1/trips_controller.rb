class Api::V1::TripsController < ApiController
  before_action :authenticate!

  def show
    trip = Trip.find(params[:id])
    lodgings = trip.lodgings.order('check_in_date ASC')
    events = trip.events.order('date ASC').order('time ASC')
    users = trip.users
    host = Host.find_by(id: trip.host_id)
    render json: {trip: trip, lodgings: lodgings, events: events, users: users, host: host}
  end

  def index
    if current_user
      trips = current_user.trips.order('start_date ASC')
    elsif current_host
      trips = current_host.trips.order('start_date ASC')
    end
    render json: {trips: trips}
  end

end
