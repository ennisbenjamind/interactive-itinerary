class Event < ApplicationRecord
  validates_presence_of :time, :address, :name, :date
  validates :name, length: { maximum: 50 }
  validates :details, length: { maximum: 140 }
  validates :expense, numericality: true
  belongs_to :trip
end
