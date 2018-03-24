class Event < ApplicationRecord
  validates_presence_of :time, :location
  belongs_to :trip
end
