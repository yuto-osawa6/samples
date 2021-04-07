class Ihome < ApplicationRecord
  has_many :iihomes
  accepts_nested_attributes_for :iihomes,allow_destroy: true
end
