class Bbhome < ApplicationRecord
  belongs_to :bhome
  mount_uploader :image, ImageUploader
end
