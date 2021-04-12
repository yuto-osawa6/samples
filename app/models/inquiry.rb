class Inquiry < ApplicationRecord
  # attr_accessor :name, :email, :message

  validates :name,presence: { :message => 'ご担当者様名を入力してください。'}
  validates :email,presence: { :message => 'E-mailを入力してください。'}
  validates :message,presence: { :message => 'お問い合わせ内容を入力してください'}
end
