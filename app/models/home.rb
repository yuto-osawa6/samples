class Home < ApplicationRecord
  has_many :interviews
  accepts_nested_attributes_for :interviews,allow_destroy: true
end
