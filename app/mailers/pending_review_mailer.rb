class PendingReviewMailer < ApplicationMailer
  default from: ENV['gmail_username']

  def pending_review_request(user)
    @user = user
    mail(
      to: ENV['gmail_username'],
      subject: "[Today\'s Date] APF Review for #{@user.first_name} #{@user.last_name}"
    )
  end
end