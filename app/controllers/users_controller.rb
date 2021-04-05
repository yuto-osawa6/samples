class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    @ahomes = Ahome.find(1)
    
  end
end
