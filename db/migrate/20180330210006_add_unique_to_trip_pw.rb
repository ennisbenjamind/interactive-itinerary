class AddUniqueToTripPw < ActiveRecord::Migration[5.1]
  def change
    change_column :trips, :password, :string, unique: true
  end
end
