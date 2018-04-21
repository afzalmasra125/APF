class CreateFirstNames < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :first_names 
      t.string :last_name
      t.string :email
      t.integer :manager_id

      t.timestamps
    end
  end
end
