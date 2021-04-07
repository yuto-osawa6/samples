class Addcolumniihomes < ActiveRecord::Migration[6.0]
  def change
    add_reference :iihomes,:ihome,foreign_key: true  
  end
end
