class RemoveExpensesOwedFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :expenses_owed, :decimal
  end
end
