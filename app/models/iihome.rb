class Iihome < ApplicationRecord
  belongs_to :ihome
  mount_uploader :image, ImageUploader
end
