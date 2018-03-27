class ChangeLodgings < ActiveRecord::Migration[5.1]
  def change
    remove_column :lodgings, :location, :string, null: false
    add_column :lodgings, :address, :string, null: false
    add_column :lodgings, :state, :string, null: false
    add_column :lodgings, :zip, :integer, null: false
    add_column :lodgings, :unit, :integer
  end
end
