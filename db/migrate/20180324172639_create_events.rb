class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.belongs_to :trip
      t.string :location, null: false
      t.datetime :time, null: false
      t.decimal :expense
      t.string :details

      t.timestamps
    end
  end
end
