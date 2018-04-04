class AddPwToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :password, :string
  end
end
