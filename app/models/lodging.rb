class Lodging < ApplicationRecord
  validates_presence_of :location, :check_in, :check_out
  belongs_to :trip
end
