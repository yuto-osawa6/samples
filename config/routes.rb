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
  :registrations => 'users/registrations',
  :sessions => 'users/sessions'   
} 

# root  'inquiry#index'
  # get   'inquiry'         => 'inquiry#index'     # 入力画面
  post  'inquiries/confirm' => 'inquiries#confirm'   # 確認画面
  post  'inquiries/back' => 'inquiries#back'   # 確認画面
  post  'inquiries/thanks'  => 'inquiries#thanks'    # 送信完了画面

# resources :users, :only => [:show]

resource :ahomes, only:[:edit,:update]

resource :bhomes, only:[:edit,:update]

resource :chomes, only:[:edit,:update]

resource :dhomes, only:[:edit,:update]

resource :ehomes, only:[:update]

resource :ehomes, only:[:new,:create,:update]

resource :fhomes, only:[:update]

resource :ihomes, only:[:update]

resource :contacts, only:[:update]


resource :blogs, only:[:new,:create,:destroy,:update]

# devise_scope :user do
#   get "user/:id", :to => "users/registrations#detail"
#   get "signup", :to => "users/registrations#new"
#   get "login", :to => "users/sessions#new"
#   get "logout", :to => "users/sessions#destroy"
# end

end
