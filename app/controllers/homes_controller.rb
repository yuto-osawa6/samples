class HomesController < ApplicationController
  def index
    @ahomes = Ahome.find(1)
    @bhomes = Bhome.find(1)
    @chomes = Chome.find(1)
    @dhomes = Dhome.find(1)
    @ehomes = Ehome.find(1)
    @fhomes = Fhome.find(1)
    @ihomes = Ihome.find(1)
    # @blogs = Blog.new
    @blogsfs = Blog.all

    @blogsfs = Blog.all.page(params[:page]).per(10)


    @inquiry = Inquiry.new

    respond_to do |format|
      format.html
      format.js
    end

  end
end
