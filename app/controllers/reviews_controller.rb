class ReviewsController < ApplicationController
before_action :authenticate_user!
  def index
            reviews = Review.all
            render json: reviews.as_json
      end 
    end
  def create 
    reviews = Review.new( {
                        reviewer_id: current_user.id,
                        reviewee_id: params[:reviewee_id],
                        relationship: params[:relationship],
                        judgement: params[:judgement],
                        teamwork: params[:teamwork],
                        positive_feedback: params[:positive_feedback],
                        positive_feedback: params[:positive_feedback],
                        needs_improvement: params[:needs_improvement]
                       })
    reviews.save
    render json: reviews.as_json
  end
  def show
    review = Review.find(params[:id])
    render json: review.as_json
  end
  def update
      review = Review.find(params[:id])
      review.relationship = params[:relationship]||review.relationship
      review.judgement = params[:judgement]||review.judgement = params[:judgement]
      review.teamwork = params[:teamwork]||review.teamwork = params[:teamwork]
      review.positive_feedback = params[:positive_feedback]||review.positive_feedback
      review.positive_feedback = params[:positive_feedback]||review.positive_feedback
      review.needs_improvement = params[:needs_improvement]||eview.needs_improvement
  end    
   def destroy
   review = Review.find(params[:id])
   review.destroy    
   render json: {message: "Successfully destroyed employee ##{employee.name}"}
 end
