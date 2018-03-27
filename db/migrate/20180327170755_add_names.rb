class AddNames < ActiveRecord::Migration[5.1]
  def change
    add_column :lodgings, :name, :string, null: false
    add_column :events, :name, :string, null: false
  end
end
