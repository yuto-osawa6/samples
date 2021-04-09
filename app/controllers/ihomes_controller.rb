class IhomesController < ApplicationController
  def update
    @ihomes = Ihome.find(1)
    # @bbhomes = @bhomes.bbhomes
    @msg = "アップデートが完了しました。"
    @ihomes.update(ihomes_params)
    
    # if @ihomes.save
    #   redirect_to request.referer
    # else
    #   render :new
    # end
  end

  private 
  def if_not_admin
    if user_signed_in?
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end
  end

  def ihomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:ihome).permit(:title,:title2,:title3,iihomes_attributes:[:title,:discribe,:colum1,:colum2,:colum3,:price,:id])


  
  
  end
end
