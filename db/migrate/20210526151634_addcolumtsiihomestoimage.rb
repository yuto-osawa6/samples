class Addcolumtsiihomestoimage < ActiveRecord::Migration[6.1]
  def change
    add_column :iihomes, :image, :text
    add_column :iihomes, :youtube, :string
  end
end
