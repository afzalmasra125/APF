class AddCoachtoEmployees < ActiveRecord::Migration[5.1]
  def change
   add_column :employees, :coach, :string
   add_column :employees, :job_title, :string
  end
end
