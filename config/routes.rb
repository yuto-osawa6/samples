Rails.application.routes.draw do
  get 'users/show'
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'homes#index'
  resources :homes, only:[:index]
    namespace :admin do
      resources :homes, only: [:index, :new, :create, :show,  :edit, :destroy]
  end


  devise_for :users, :controllers => {
  # :registrations => 'users/registrations',
  :sessions => 'users/sessions'   
} 

resources :users, :only => [:show]

resource :ahomes, only:[:edit,:update]


# devise_scope :user do
#   get "user/:id", :to => "users/registrations#detail"
#   get "signup", :to => "users/registrations#new"
#   get "login", :to => "users/sessions#new"
#   get "logout", :to => "users/sessions#destroy"
# end

end
