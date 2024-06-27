Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :user, only: [] do
        post 'create_car', to: 'users#create', on: :collection
        get 'index', to: 'users#index', on: :collection
        get 'show/:id', to: 'users#show', on: :collection
        patch 'update/:id', to: 'users#update_car', on: :collection
        patch 'publicity/:id', to: 'users#switch_publicity', on: :collection
        delete '/delete_resource/:id', to: 'users#delete_resource', on: :collection
      end
      resources :car, only: [] do
        get 'show/:id', to: 'cars#show', on: :collection
      end
      resources :users, only: [:show, :create, :destroy]
    end
  end

  # Cars routes
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
