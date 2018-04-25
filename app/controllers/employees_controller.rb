class EmployeesController < ApplicationController
  def index
    employees = Employee.all
    render json: employees.as_json
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
  def show
    employees = Employee.find(params[:id])
    render json: employee.as_json
  end 
 def update
    employee = Employee.find(params[:id])
    # user = current_user.id
    employee.first_name = params[:first_name] || employee.first_name
    employee.last_name = params[:last_name] || employee.last_name
    employee.email = params[:email] || employee.email
    employee.manager_id = params[:manager_id] || employee.manager_id
    employee.manager_status = params[:manager_status] || employee.manager_status
    render json: employee.as_json
  end 
 def destroy
   employee = Employee.find(params[:id])
   employee.destroy    
   render json: {message: "Successfully destroyed employee ##{employee.name}"}
 end
end   