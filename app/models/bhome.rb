class Bhome < ApplicationRecord
  has_many :bbhomes
  accepts_nested_attributes_for :bbhomes,allow_destroy: true
end
