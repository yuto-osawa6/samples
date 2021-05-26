class Addcolumsbbhomestoimage < ActiveRecord::Migration[6.1]
  def change
    add_column :bbhomes, :image, :text
  end
end
