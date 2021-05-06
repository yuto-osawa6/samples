class Addcolmunstoeehomesinposter < ActiveRecord::Migration[6.1]
  def change
    add_column :eehomes, :poster, :text
  end
end
