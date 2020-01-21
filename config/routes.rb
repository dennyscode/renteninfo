Rails.application.routes.draw do
  devise_for :users, skip: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'mains#main'
  resources :posts
  resources :questions
  get 'impressum', to: 'mains#impressum'
  post 'rechner', to: 'questions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'posts', to: 'posts#index'
  post 'mains/contact_sent'
  get 'mains/thank_you'
  get 'rechner', to: 'questions#rechner'
  get 'index', to: 'questions#index'
  get 'contact', to: 'mains#contact'
  get 'more', to: 'mains#more'
  get 'team', to: 'mains#team'
end
