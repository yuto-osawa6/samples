class Eehome < ApplicationRecord
  belongs_to :ehome
  # mount_uploader :image, VideoUploader
  mount_uploader :image, ImageUploader

end
