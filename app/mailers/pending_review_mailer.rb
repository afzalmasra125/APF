class PendingReviewMailer < ApplicationMailer
  default from: ENV['pending_review_email_username']

  def pending_review_request(reviewer, reviewee)
    @reviewer = reviewer
    @reviewee = reviewee
    mail(
      # Need to update to @user.email when live
      to: ENV['pending_review_email_username'],
      subject: "[Today\'s Date] APF Review for #{@reviewee.first_name} #{@reviewee.last_name}"
    )
  end
end