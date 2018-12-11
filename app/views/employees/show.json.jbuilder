json.id @employee.id
json.first_name @employee.first_name
json.last_name @employee.last_name
json.email @employee.email
json.manager_id @employee.manager_id
json.manager_status @employee.manager_status

json.reviews @employee.reviews.each do|review|
  json.review_id review.id
  json.reviewee_id review.reviewee.id
  json.reviewer_id review.reviewer.id
  json.relationship review.relationship
  json.judgement review.judgement
  json.teamwork review.teamwork
  json.leadership review.leadership
  json.technical review.technical
  json.positive_feedback review.positive_feedback
  json.needs_improvement review.needs_improvement
  json.reviewer_manager_status review.reviewer.manager_status
end

json.current_employee @current_employee
