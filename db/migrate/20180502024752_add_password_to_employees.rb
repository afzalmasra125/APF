class AddPasswordToEmployees < ActiveRecord::Migration[5.1]
  def change
    add_column :employees, :password_digest, :string

  end
end
