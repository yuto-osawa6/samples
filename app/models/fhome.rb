class Fhome < ApplicationRecord
  has_many :ffhomes
  accepts_nested_attributes_for :ffhomes,allow_destroy: true
end
