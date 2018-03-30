class Trip < ApplicationRecord
  validates_presence_of :start_date, :end_date
  validates :password, uniqueness: true
  has_one :host
  has_many :events
  has_many :lodgings
  has_many :attendances
  has_many :users, through: :attendances
end
