class AddExpensesOwedToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :expenses_owed, :decimal
  end
end
