class RemoveStateZip < ActiveRecord::Migration[5.1]
  def change
    remove_column :lodgings, :state, :string, null: false
    remove_column :lodgings, :zip, :integer, null: false
    remove_column :lodgings, :unit, :integer
    remove_column :events, :state, :string, null: false
    remove_column :events, :zip, :integer, null: false
  end
end
