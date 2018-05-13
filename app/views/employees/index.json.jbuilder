  json.array!@employees.each do |employee|
  json.id employee.id
  json.first_name employee.first_name
  json.last_name employee.last_name
  json.email employee.email
  json.manager_id employee.manager_id
  json.manager_status employee.manager_status
  json.password employee.password
  json.password_digest employee.password_digest
  end

