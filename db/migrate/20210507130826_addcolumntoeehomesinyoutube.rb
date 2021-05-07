class Addcolumntoeehomesinyoutube < ActiveRecord::Migration[6.1]
  def change
    add_column :eehomes, :youtube, :string
  end
end
