class Lodging < ApplicationRecord
  validates_presence_of :address, :check_in_time, :check_out_time, :check_in_date, :check_out_date
  validates :name, length: { maximum: 50 }
  belongs_to :trip
end
