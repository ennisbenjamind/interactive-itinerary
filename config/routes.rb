Rails.application.routes.draw do
  devise_for :hosts
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :trips, only: [:new, :create, :index]

  resources :attendances
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :trips
    end
  end
end
