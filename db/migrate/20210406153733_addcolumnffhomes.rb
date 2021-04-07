class Addcolumnffhomes < ActiveRecord::Migration[6.0]
  def change
    add_reference :ffhomes,:fhome,foreign_key: true   
  end
end
