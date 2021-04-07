class AhomesController < ApplicationController
  before_action :if_not_admin
  # def new

    

  # end

  # def edit
  #   @ahomes = Ahome.find(params[:id])

  # end

  def update
    @ahomes = Ahome.find(1)
    if @ahomes.update(ahomes_params)
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

  def ahomes_params 


      params.require(:ahome).permit(:title,:title2,:discribe,:button_right,:button_left,:url_right,:url_left,:logo,:adress,aahomes_attributes:[:menu,:id])
  
  
  end
  
  
end
