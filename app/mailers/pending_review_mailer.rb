class PendingReviewMailer < ApplicationMailer
  default from: ENV['pending_review_email_username']

  def pending_review_request(user)
    @user = user
    mail(
      # Need to update to @user.email when live
      to: ENV['pending_review_email_username'],
      subject: "[Today\'s Date] APF Review for #{@user.first_name} #{@user.last_name}"
    )
  end
end