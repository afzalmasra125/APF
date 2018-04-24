Rails.application.routes.draw do
   get '/employees' => 'employees#index'
   post '/employees' => 'employees#create'
   get '/employees/:id' => 'employees#show'
   patch '/employee/:id' => 'employees#update'
   delete '/employee/:id' => 'employees#destroy'

   get '/reviews' => 'reviews#index'
   post '/reviews' => 'reviews#create'
   get '/reviews/:id' => 'reviews#show'
   patch '/review/:id' => 'reviews#update'
   delete '/review/:id' => 'reviews#destroy'
end
