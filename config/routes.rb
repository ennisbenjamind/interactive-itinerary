Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :hosts
  devise_for :users
end

Rails.application.routes.draw do
  resources :trips do
    resources :events, to: 'static_pages#index'
  end
  resources :trips do
    resources :lodgings, to: 'static_pages#index'
  end
  resources :trips do
    resources :expenses, to: 'static_pages#index'
  end
  resources :attendances
  resources :trips, only: [:new, :create, :index]
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :trips do
        resources :events
        resources :lodgings
      end
      resources :events
      resource :lodgings
    end
  end
end
