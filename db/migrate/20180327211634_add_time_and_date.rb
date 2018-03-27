class AddTimeAndDate < ActiveRecord::Migration[5.1]
  def change
    add_column :lodgings, :check_in_time, :time, null: false
    add_column :lodgings, :check_in_date, :date, null: false
    add_column :lodgings, :check_out_time, :time, null: false
    add_column :lodgings, :check_out_date, :date, null: false
    add_column :events, :time, :time, null: false
    add_column :events, :date, :date, null: false
  end
end
