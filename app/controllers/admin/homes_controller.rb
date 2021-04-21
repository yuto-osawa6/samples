class Admin::HomesController < ApplicationController
  before_action :if_not_admin
  # before_action :set_homes, only: [:show, :edit, :destroy]

  def index
    @ahomes = Ahome.find(1)
    @bhomes = Bhome.find(1)
    @chomes = Chome.find(1)
    @dhomes = Dhome.find(1)
    @ehomes = Ehome.find(1)
    @fhomes = Fhome.find(1)
    @ihomes = Ihome.find(1)
    @blogs = Blog.new
    @blogsfs = Blog.all
    @blogsfs = Blog.all.page(params[:page]).per(10)
    @contacts = Contact.find(1)
    # @bhomes = Bhome.find_by(id:1)
    # @bhomes.bbhomes
    # @ahomes = 
    @inquiries = Inquiry.all


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
    # @homes = Homes.find(params[:id])
  end
end
