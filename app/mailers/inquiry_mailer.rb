class InquiryMailer < ApplicationMailer
  # default from: "pooh.atgmw628@gmail.com"   # 送信元アドレス

  def received_email(inquiry)
    @inquiry = inquiry
    mail(:to => inquiry.email, :subject => 'お問い合わせを承りました')
  end

  def send_mail(inquiry)
    @inquiry = inquiry
    mail(:to => "film.monkey45@gmail.com", :subject => 'お問い合わせを承りました')
  end

end
