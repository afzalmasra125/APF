class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :manager_id
      t.boolean :manager_status

      t.timestamps
    end
  end
end
