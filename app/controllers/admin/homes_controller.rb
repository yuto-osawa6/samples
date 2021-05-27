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
    @interviews = Interview.all
    @inquiries = Inquiry.all.page(params[:confirm_page]).per(10)

    @homes = Home.find(1)

    @eehomes = @ehomes.eehomes.page(params[:pag2]).per(3)
    


  end

  def update
    @inters = Interview.all
    @homes = Home.find(1)
    # @bbhomes = @bhomes.bbhomes
    @msg = "アップデートが完了しました。"
    @homes.update(fhomes_params)
    

  end

  private
  def if_not_admin
    if user_signed_in?
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end
  end

  def fhomes_params 
    # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
    params.require(:home).permit(interviews_attributes:[:question,:answer,:id])

  end
end
