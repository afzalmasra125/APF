Rails.application.routes.draw do
   get '/employees' => 'employees#index'
   post '/employees' => 'employees#create'
   get '/employees/:id' => 'employees#show'
   patch '/employee/:id' => 'employees#update'
   delete '/employee/:id' => 'employees#destroy'
end
