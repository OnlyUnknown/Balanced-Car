Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
      resources :cars, only: [:index, :show, :create, :destroy]
      resources :users, only: [:show, :create, :destroy]
    end
  end

  # Cars routes
  resources :cars, only: [] do
    post 'create_car', to: 'api/v1/users#create', on: :collection
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
