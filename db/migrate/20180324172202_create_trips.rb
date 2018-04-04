class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :name, null: false, default: "My Trip"
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.decimal :expenses
      t.belongs_to :host

      t.timestamps
    end
  end
end
