class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id
      t.integer :reviewee_id
      t.integer :relationship
      t.integer :judgement
      t.integer :teamwork
      t.integer :leadership
      t.integer :technical
      t.text :positive_feedback
      t.text :needs_improvement

      t.timestamps
    end
  end
end
