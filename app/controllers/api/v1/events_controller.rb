class Api::V1::EventsController < ApiController

  def index
    render json: Event.all
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def create
    event = Event.new(event_params)
    trip = event.trip
    trip.expenses += event.expense
    if event.save
      trip.save
      render json: { events: Event.all }
    else
      render json: { errors: event.errors.full_messages }
    end
  end

  def destroy
    event = Event.find(params[:id])
    trip = event.trip
    trip.expenses -= event.expense
    trip.save
    event.destroy
  end

  def event_params
    params.require(:event).permit(:name, :time, :date, :address, :expense, :details, :lat, :lng, :trip_id)
  end
end
