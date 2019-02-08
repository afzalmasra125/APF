class ReviewsController < ApplicationController
  before_action :authenticate_employee
  def index
    reviews = Review.all
    render json: reviews.as_json
  end 

  def pending_reviews
    @reviews = Review.all
    render 'index.json.jbuilder'
  end

  def create 
    reviews = Review.new( {
                        reviewer_id: current_employee.id,
                        reviewee_id: params[:reviewee_id].to_i,
                        relationship: params[:relationship].to_i,
                        judgement: params[:judgement].to_i,
                        teamwork: params[:teamwork].to_i,
                        dependability: params[:dependability].to_i,
                        positive_feedback: params[:positive_feedback],
                        needs_improvement: params[:needs_improvement]
                       })
    if reviews.save
      render json: reviews.as_json
    else
      reviews.errors
    end
  end

  def show
    review = Review.find(params[:id])
    render json: review.as_json
  end

  def update
    review = Review.find(params[:id])
    review.relationship = params[:relationship].to_i||review.relationship
    review.judgement = params[:judgement].to_i||review.judgement = params[:judgement]
    review.teamwork = params[:teamwork].to_i||review.teamwork = params[:teamwork]
    review.dependability = params[:dependability].to_i||review.dependability = params[:dependability]
    review.positive_feedback = params[:positive_feedback].to_i||review.positive_feedback
    review.positive_feedback = params[:positive_feedback].to_i||review.positive_feedback
    review.needs_improvement = params[:needs_improvement].to_i||review.needs_improvement
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: {message: "Successfully destroyed employee ##{employee.name}"}
  end

  def email
    mg_client = Mailgun::Client.new ENV["mailgun_private_api_key"]

    message_params = {
      :from    => 'postmaster@sandbox58c6fdfec83a472ca457affa4f1c321b.mailgun.org',  
      :to      => 'tfisher21@gmail.com',
      :subject => 'The Ruby SDK is awesome!',
      :text    => 'It is really easy to send a message!'
    }

    mg_client.send_message ENV["mailgun_subdomain"], message_params

    render json: {msg: "sent"}
  end
end
