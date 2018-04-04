class CreateLodgings < ActiveRecord::Migration[5.1]
  def change
    create_table :lodgings do |t|
      t.belongs_to :trip
      t.string :location, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
      t.decimal :expense

      t.timestamps
    end
  end
end
