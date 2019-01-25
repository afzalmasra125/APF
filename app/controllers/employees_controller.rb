class EmployeesController < ApplicationController
  before_action :authenticate_employee!
  def index
    @employees = Employee.all
    render 'index.json.jbuilder'
  end

  def manager_employee_index
    if current_employee.manager_status
      @employees = Employee.where(manager_id: current_employee.id)
      render 'index.json.jbuilder'
    else
      render json: {msg: "unauthorized"}
    end
  end

  def manager_index
    @employee = Employee.all
    @managers = @employee.where(manager_status: true)
    render json: @managers.as_json
  end

  def create
    @employees = Employee.new(
                        first_name: params[:first_name],
                        last_name: params[:last_name],
                        email: params[:email],
                        manager_id: params[:manager_id],
                        manager_status: params[:manager_status],
                        password: params[:password],
                        password_confirmation: params[:password_confirmation]
      )
    if @employees.save
      render json: {message: 'Employee created successfully'}, status: :created
    else
      render json: {errors: 'Error creating account'}, status: :bad_requested
    end
  end

  def show
    @employee = Employee.find(params[:id])
    render 'show.json.jbuilder'
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

  def getEmployeesByManagerID
    employees = Employee.where(manager_id: params[:manager_id])
    render json: employees.as_json
  end

  def get_current_employee
    render json: current_employee
  end
end

