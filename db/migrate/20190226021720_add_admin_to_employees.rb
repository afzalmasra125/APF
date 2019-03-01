class AddAdminToEmployees < ActiveRecord::Migration[5.1]
  def change
  	rename_column  :employees, :admin, :admin_status
  end
end
