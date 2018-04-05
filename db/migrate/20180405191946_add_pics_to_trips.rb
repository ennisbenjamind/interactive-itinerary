class AddPicsToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :image_link, :string
  end
end
