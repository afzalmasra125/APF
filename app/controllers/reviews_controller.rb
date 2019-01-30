class ReviewsController < ApplicationController
  before_action :authenticate_employee
  def index
        reviews = Review.all
        render json: reviews.as_json
  end 
  def pending_reviews
      @reviews = Review.all
      # @reviews = Review.all
      render 'index.json.jbuilder'
  end
  def create 
    reviews = Review.new( {
                        reviewer_id: current_employee.id,
                        reviewee_id: params[:reviewee_id].to_i,
                        relationship: params[:relationship].to_i,
                        judgement: params[:judgement].to_i,
                        teamwork: params[:teamwork].to_i,
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
      review.positive_feedback = params[:positive_feedback].to_i||review.positive_feedback
      review.positive_feedback = params[:positive_feedback].to_i||review.positive_feedback
      review.needs_improvement = params[:needs_improvement].to_i||eview.needs_improvement
  end    
   def destroy
   review = Review.find(params[:id])
   review.destroy    
   render json: {message: "Successfully destroyed employee ##{employee.name}"}
 end
end
