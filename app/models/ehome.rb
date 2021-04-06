class Ehome < ApplicationRecord
  has_many :eehomes
  accepts_nested_attributes_for :eehomes,allow_destroy: true
end
