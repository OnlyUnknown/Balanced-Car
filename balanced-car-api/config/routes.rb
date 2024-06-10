Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'api/v1/users/sessions',
    registrations: 'api/v1/users/registrations'
  }

  get '/current_user', to: 'api/v1/current_user#index'

      resources :cars, only: [] do
        post 'create_car', to: 'api/v1/users#create', on: :collection
      end
      resources :users, only: [:show, :create, :destroy]
    end
  end

  # Cars routes
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
