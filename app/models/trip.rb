class Trip < ApplicationRecord
  validates_presence_of :start_date, :end_date

  has_many :users
  has_many :users, through: :attendances
end
