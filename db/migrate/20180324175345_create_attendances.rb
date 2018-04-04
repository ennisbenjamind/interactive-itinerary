class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.belongs_to :trip
      t.belongs_to :user
    end
  end
end
