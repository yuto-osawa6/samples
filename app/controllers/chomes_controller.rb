class ChomesController < ApplicationController
  before_action :if_not_admin
  
  
  def update
    @chomes = Chome.find(1)
    # @bbhomes = @bhomes.bbhomes
    @chomes.update(chomes_params)
    if @chomes.save
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

  def chomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:chome).permit(:title,:title2,:discribe)


  
  
  end
end
