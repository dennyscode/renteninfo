Rails.application.routes.draw do
  resources :posts
  root 'mains#main'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'posts', to: 'posts#index'
  get 'rechner', to: 'questions#rechner'
  get 'show', to: 'questions#show'
  get 'index', to: 'questions#index'
  get 'impressum', to: 'mains#impressum'
  get 'more', to: 'mains#more'
end
