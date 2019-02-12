class PendingReviewMailer < ApplicationMailer
  default from: ENV['gmail_username']

  def sample_email(user)
    @user = user
    mail(to: ENV['gmail_username'], subject: 'Sample Email')
  end
end
