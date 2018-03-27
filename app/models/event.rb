class Event < ApplicationRecord
  validates_presence_of :time, :address, :zip, :state, :name, :date
  validates :zip, numericality: { only_integer: true}
  validates :zip, length: { is: 5 }
  validates :expense, numericality: true
  belongs_to :trip
end
