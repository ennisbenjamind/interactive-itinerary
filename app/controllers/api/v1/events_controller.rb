class Api::V1::EventsController < ApiController

  def show
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: { events: Event.all }
    else
      render json: { errors: event.errors.full_messages }
    end
  end

  def event_params
    params.require(:event).permit(:name, :time, :date, :address, :expense, :details, :trip_id)
  end
end
