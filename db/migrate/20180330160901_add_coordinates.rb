class AddCoordinates < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :lat, :float
    add_column :events, :lng, :float
    add_column :lodgings, :lat, :float
    add_column :lodgings, :lng, :float
  end
end
