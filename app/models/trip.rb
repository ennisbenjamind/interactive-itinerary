class Trip < ApplicationRecord
  validates_presence_of :start_date, :end_date, :name, :password
  validates :password, uniqueness: true
  validates :name, length: { maximum: 20 }
  validates :image_link, format: {with: /\.(png|jpg)\Z/i}
  has_one :host
  has_many :events
  has_many :lodgings
  has_many :attendances
  has_many :users, through: :attendances
end
