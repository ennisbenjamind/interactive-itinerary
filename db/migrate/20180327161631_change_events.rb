class ChangeEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :location, :string, null: false
    add_column :events, :address, :string, null: false
    add_column :events, :state, :string, null: false
    add_column :events, :zip, :integer, null: false
  end
end
