Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :cars, only: [] do
        post 'create_car', to: 'users#create', on: :collection
        get 'index', to: 'users#index', on: :collection
      end
      resources :users, only: [:show, :create, :destroy]
    end
  end

  # Cars routes
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
