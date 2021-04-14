class ContactsController < ApplicationController
  before_action :if_not_admin
  
  def update
    @contacts = Contact.find(1)
    @blogsfs = Blog.all
    @msg = "アップデートが完了しました。"
    @contacts.update(cuhomes_params)
   
  end

  private 
  def if_not_admin
    if user_signed_in?
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end
  end

  def cuhomes_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:contact).permit(:btitle,:bdiscribe,:cutile,:cuiscribe)


  
  
  end
end
