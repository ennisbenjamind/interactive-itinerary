class RemoveDatetimeFromEventsLodgings < ActiveRecord::Migration[5.1]
  def change
    remove_column :lodgings, :check_in, :datetime, null: false
    remove_column :lodgings, :check_out, :datetime, null: false
    remove_column :events, :time, :datetime, null: false
  end
end
