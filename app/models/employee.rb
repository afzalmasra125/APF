class Employee < ApplicationRecord
  has_secure_password
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true

has_many :reviews, foreign_key: "reviewee_id"
has_many :submitted_reviews, class_name: "Review", foreign_key: "reviewer_id"

has_many :employees, foreign_key: "manager_id"
belongs_to :manager, class_name: "Employee", foreign_key: "manager_id", optional: true

has_many :team_reviews, through: :employees, source: :reviews
end
