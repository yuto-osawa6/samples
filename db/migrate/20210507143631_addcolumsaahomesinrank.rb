class Addcolumsaahomesinrank < ActiveRecord::Migration[6.1]
  def change
    add_column :aahomes, :rank, :integer
  end
end
