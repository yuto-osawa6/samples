class BhomesController < ApplicationController
  def edit
    @bhomes = Bhome.find(params[:id])
    @bbhomes = @bhomes.bbhomes

  end

  def update
    @msg = "アップデートが完了しました。"
    @bhomes = Bhome.find(params[:id])
    # @bbhomes = @bhomes.bbhomes
    @bhomes.update(bhomes_params)

    # if @bhomes.save
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

  def bhomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])


  
  
  end
end
