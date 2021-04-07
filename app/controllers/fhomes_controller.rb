class FhomesController < ApplicationController
  def update
    @fhomes = Fhome.find(1)
    # @bbhomes = @bhomes.bbhomes
    @fhomes.update(fhomes_params)
    if @fhomes.save
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

  def fhomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:fhome).permit(:title,:title2,:discribe,ffhomes_attributes:[:title,:discribe,:id])


  
  
  end
end
