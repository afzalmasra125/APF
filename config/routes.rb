Rails.application.routes.draw do
  post 'employee_token' => 'employee_token#create'
   get '/employees' => 'employees#index'
   post '/employees' => 'employees#create'
   get '/employees/:id' => 'employees#show'
   patch '/employee/:id' => 'employees#update'
   delete '/employee/:id' => 'employees#destroy'
   get '/manager/employees' => 'employees#getEmployeesByManagerID'

   get '/reviews' => 'reviews#index'
   get '/pending_reviews' => 'reviews#pending_reviews'
   post '/reviews' => 'reviews#create'
   get '/reviews/:id' => 'reviews#show'
   patch '/review/:id' => 'reviews#update'
   delete '/review/:id' => 'reviews#destroy'
end
