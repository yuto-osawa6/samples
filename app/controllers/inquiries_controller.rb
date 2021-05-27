class InquiriesController < ApplicationController
  def index
    # 入力画面を表示
    @inquiry = Inquiry.new
    render :action => 'index'
  end

  def confirm
    @ahomes = Ahome.find(1)
    @bhomes = Bhome.find(1)
    @chomes = Chome.find(1)
    @dhomes = Dhome.find(1)
    @ehomes = Ehome.find(1)
    @fhomes = Fhome.find(1)
    @ihomes = Ihome.find(1)
    # @blogs = Blog.new
    @blogsfs = Blog.all

    # @inquiry = Inquiry.new

    # 入力値のチェック
    @inquiry = Inquiry.new(confirm_params)
    # @aaa = 1
    # @lll = params[:name]
    if @inquiry.valid?
      @thanks = Inquiry.new
    else
  
    end
  end

  def back
    @ahomes = Ahome.find(1)
    @bhomes = Bhome.find(1)
    @chomes = Chome.find(1)
    @dhomes = Dhome.find(1)
    @ehomes = Ehome.find(1)
    @fhomes = Fhome.find(1)
    @ihomes = Ihome.find(1)
    # @blogs = Blog.new
    @blogsfs = Blog.all
    @inquiry = Inquiry.new(confirm_params)
    @aaksks = Ahome.find(1)
    
    # render "homes/index"

    # @inquiry = Inquiry.new(confirm_params)
    # @aaa = 1
    # @lll = params[:name]

  
  end

  def thanks
    # メール送信
    @inquiry1 = Inquiry.new
    @inquiry = Inquiry.new(confirm_params)
    @inquiry.save
    InquiryMailer.received_email(@inquiry).deliver
    InquiryMailer.send_mail(@inquiry).deliver
    @msg = "お問い合わせを承りました。"
    # redirect_to root_path
  end

  private
  def confirm_params
    params.require(:inquiry).permit(:name, :email, :message,:conpany)

  end
end
