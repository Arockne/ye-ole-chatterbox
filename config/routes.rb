Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'
    get '/profile', to: 'users#profile'

    resources :chatrooms, only: [:index, :show] do
      resources :messages, only: [:create, :update]
      resources :chatroom_memberships, only: [:create, :destroy]
    end
    
    resources :users, only: [:update]
    resources :messages, only: [:show, :destroy]
  end

  mount ActionCable.server => '/cable'
  
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
