class ReviewsController < ApplicationController
  def index
    if manager_status == true
      review = Review.all
      render json: review.as_json
    end
  def create 
    employees = Employee.new( {
                        first_name: params[:first_name],
                        last_name: params[:last_name],
                        email: params[:email],
                        manager_id: params[:manager_id],
                        manager_status: params[:manager_status]
                       })
    employees.save
    render json: employees.as_json
  end
end
