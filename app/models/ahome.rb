class Ahome < ApplicationRecord
  has_many :aahomes
  accepts_nested_attributes_for :aahomes,allow_destroy: true
  mount_uploader :logo, ImageUploader
end
