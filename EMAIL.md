# Setting up Email for Production Environment

## Environmental Variables

## Setting up SMTP Server
In `production.rb` deploy the following code, updating the environmental variables according to the previous steps.

```
# Email Server Setup
  config.action_mailer.delivery_method = :smtp
  # SMTP settings for gmail. # Gmail username and password is saved in application.yml
  config.action_mailer.smtp_settings = {
   :address              => "smtp.gmail.com", # Needs to be updated
   :port                 => 587,  # Needs to be updated
   :user_name            => ENV['pending_review_email_username'],
   :password             => ENV['pending_review_email_password'],
   :authentication       => "plain",
  :enable_starttls_auto => true
  }
```

## Updating Code
In `pending_review_mailer.rb` update ENV['gmail_username'] to @user.email