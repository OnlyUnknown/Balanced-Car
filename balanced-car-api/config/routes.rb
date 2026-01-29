Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :user, only: [] do
        get 'index/cars', to: 'users#index_cars', on: :collection
        get 'index/drivers', to: 'users#index_drivers', on: :collection
        get 'index/bills', to: 'users#index_bills', on: :collection
        get 'index/bills/:id', to: 'users#index_car_bills', on: :collection
        get 'index/revenues', to: 'revenues#index_revenues', on: :collection
        get 'index/revenues/:id', to: 'revenues#index_car_revenues', on: :collection
        get 'index/groups', to: 'groups#index', on: :collection
        get 'show/car/:id', to: 'users#show_car', on: :collection
        get 'show/driver/:id', to: 'users#show_driver', on: :collection
        get 'show/bill/:id', to: 'users#show_bill', on: :collection
        get 'show/revenue/:id', to: 'revenues#show_revenue', on: :collection
        get 'show/group/:classname/:id', to: 'groups#show_items', on: :collection
        patch 'update_item/:id', to: 'users#update_item', on: :collection
        patch 'publicity/:id', to: 'users#switch_publicity', on: :collection
        delete '/delete_resource/:resource/:id', to: 'users#delete_resource', on: :collection
        post '/create_item', to: 'users#create_item', on: :collection
        get '/profile', to: 'users#profile', on: :collection
        patch '/update_profile', to: 'users#update_profile', on: :collection
        post '/create_group', to: 'groups#create_group', on: :collection
        post '/add_to_group', to: 'groups#add_item_to_group', on: :collection
        post '/switch_publicity/:id', to: 'groups#switch_publicity', on: :collection
        delete '/delete_group/:id', to: 'groups#delete_group', on: :collection
        delete '/remove_from_group/:group_id/:item_type/:item_id', to: 'groups#remove_from_group', on: :collection
        get "show/public_group/:id", to: 'cars#show_group_items', on: :collection
        get "show/public_groups/:id", to: 'cars#show_public_groups', on: :collection
        get 'show/public_car/:id', to: 'cars#show', on: :collection
      end
      resources :users, only: [:show, :create, :destroy]
    end
  end

  # Cars routes
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
