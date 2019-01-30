class AddNewRating < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :dependability, :integer
  end
end
