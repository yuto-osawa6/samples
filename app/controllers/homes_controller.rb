class HomesController < ApplicationController
  def index
    @ahomes = Ahome.includes(:aahomes).find(1)
    @bhomes = Bhome.includes(:bbhomes).find(1)
    @chomes = Chome.find(1)
    @dhomes = Dhome.find(1)
    @ehomes = Ehome.includes(:eehomes).find(1)
    @fhomes = Fhome.includes(:ffhomes).find(1)
    @ihomes = Ihome.includes(:iihomes).find(1)
    # @blogs = Blog.new
    @blogsfs = Blog.all

    @blogsfs = Blog.all.page(params[:page]).per(10)


    @inquiry = Inquiry.new

    @interviews = Interview.all
    @home = Home.find(1)

    @eehomes = @ehomes.eehomes.page(params[:pag2]).per(3)

    respond_to do |format|
      format.html
      format.js
    end

  end
end
