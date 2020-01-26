Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'mains#main'
  devise_for :users
  resources :users
  resources :posts
  resources :questions

  namespace :users do
    get 'login', to: 'sessions#new'
  end

  get 'rechner', to: 'questions#rechner'
  get 'index', to: 'questions#index'
  post 'rechner', to: 'questions#create'

  get 'mains/thank_you'
  get 'contact', to: 'mains#contact'
  get 'more', to: 'mains#more'
  get 'team', to: 'mains#team'
  get 'impressum', to: 'mains#impressum'
  post 'mains/contact_sent'

end
