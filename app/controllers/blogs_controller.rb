class BlogsController < ApplicationController
  before_action :if_not_admin
  def create
    @blog = Blog.new(blogs_params)
    if @blog.save
      redirect_to request.referer, notice: '作成されました'
    else
      render :new
    end
  end

  def update
    @blogs = Blog.find(params[:blog_id])
    # @bbhomes = @bhomes.bbhomes
    @blogs.update(blogs_params)
    if @blogs.save
      redirect_to request.referer
    else
      render :new
    end
  end

  def destroy
    @blog = Blog.find(params[:blog_id])
    @blog.destroy
    redirect_to request.referer
  end

  private 
  def if_not_admin
    if user_signed_in?
      redirect_to root_path unless current_user.admin?
    else
      redirect_to root_path
    end
  end

  def blogs_params 


      # params.require(:bhome).permit(:title,:title2,:discribe,bbhomes_attributes:[:title,:discribe,:id])
      params.require(:blog).permit(:title,:discribe,:image,:content)


  
  
  end
end
