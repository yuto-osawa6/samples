class Addreferencestointerview < ActiveRecord::Migration[6.1]
  def change
    add_reference :interviews,:home,foreign_key: true 
  end
end
