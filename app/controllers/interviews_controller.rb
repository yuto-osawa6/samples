class InterviewsController < ApplicationController
  before_action :if_not_admin
  
  
  def update
    @dhomes = Dhome.find(1)
    @msg = "アップデートが完了しました。"
    # @bbhomes = @bhomes.bbhomes
    @dhomes.update(dhomes_params)
    # if @dhomes.save
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

  def dhomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:dhome).permit(:title,:title2,:discribe,:discribe2)


  
  
  end
end
