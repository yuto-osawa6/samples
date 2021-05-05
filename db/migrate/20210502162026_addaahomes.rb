class Addaahomes < ActiveRecord::Migration[6.1]
  def change
    add_column :aahomes, :mainmenu ,:string
  end
end
