class EhomesController < ApplicationController
  before_action :if_not_admin
  
  def update
    @ehomes = Ehome.find(1)
    # @bbhomes = @bhomes.bbhomes
    @ehomes.update(ehomes_params)
    if @ehomes.save
      redirect_to request.referer
    else
      render :new
    end
  end

  private 
  def if_not_admin
    if user_signed_in?
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end
  end

  def ehomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:ehome).permit(:title,:discribe,eehomes_attributes:[:title,:discribe,:image, :id ,:_destroy])


  
  
  end
end
