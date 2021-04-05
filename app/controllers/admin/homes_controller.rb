class Admin::HomesController < ApplicationController
  before_action :if_not_admin
  before_action :set_homes, only: [:show, :edit, :destroy]

  def index
    @ahomes = Ahome.find(1)


  end

  private
  def if_not_admin
    if user_signed_in?
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end
  end

  def set_homes
    @homes = Homes.find(params[:id])
  end
end
