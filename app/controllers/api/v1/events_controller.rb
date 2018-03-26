class Api::V1::TripsController < ApiController

  def new
  render json: {trip: Trip.find(params[:id])}
  review = Review.new
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: { events: Event.all }
    else
      render json: { messages: event.errors.full_messages }
    end
  end
end
