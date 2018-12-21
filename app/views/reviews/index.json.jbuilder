json.array! @reviews.each do |review|
  json.id review.id
  json.relationship review.relationship
  json.judgement review.judgement
  json.teamwork review.teamwork
  json.leadership review.leadership
  json.technical review.technical
  json.positive_feedback review.positive_feedback
  json.needs_improvement review.needs_improvement
  json.reviewer_id review.reviewer_id

  json.reviewee do
    json.first_name review.reviewee.first_name
    json.last_name review.reviewee.last_name
    json.id review.reviewee.id
  end
end
