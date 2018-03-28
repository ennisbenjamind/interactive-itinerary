class Event < ApplicationRecord
  validates_presence_of :time, :address, :name, :date
  validates :expense, numericality: true
  belongs_to :trip
end
