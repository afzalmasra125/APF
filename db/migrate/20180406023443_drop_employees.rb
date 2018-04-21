class DropEmployees < ActiveRecord::Migration[5.1]
  def change
     drop_table :employees
  end
end
