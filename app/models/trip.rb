class Trip < ApplicationRecord
  validates_presence_of :start_date, :end_date

  has_one :host
  has_many :attendances
  has_many :users, through: :attendances
end
