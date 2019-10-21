Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
  end
  devise_for :users, skip: :all
  resources :posts
  resources :questions
  root 'mains#main'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'posts', to: 'posts#index'
  post 'mains/thank_you'
  get 'rechner', to: 'questions#rechner'
  get 'index', to: 'questions#index'
  get 'impressum', to: 'mains#impressum'
  get 'more', to: 'mains#more'
  post 'rechner', to: 'questions#create'
end
