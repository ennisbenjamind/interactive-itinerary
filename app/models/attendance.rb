class Attendance < ApplicationRecord
  validates :user_id, uniqueness: {scope: :trip_id}
  belongs_to :trip
  belongs_to :user
end
