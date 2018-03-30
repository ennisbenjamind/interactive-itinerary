class AddUniqueToAttendance < ActiveRecord::Migration[5.1]
  def change
    add_index :attendances, [:user_id, :trip_id], unique: true
  end
end
