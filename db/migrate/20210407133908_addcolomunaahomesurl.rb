class Addcolomunaahomesurl < ActiveRecord::Migration[6.0]
  def change
    add_column :aahomes, :link ,:string
  end
end
