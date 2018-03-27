class Attendance < ApplicationRecord
  validates :user_id, uniqueness: true
  belongs_to :trip
  belongs_to :user
end
