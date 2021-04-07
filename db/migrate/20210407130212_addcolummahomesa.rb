class Addcolummahomesa < ActiveRecord::Migration[6.0]
  def change
    add_column :ahomes,:logo ,:text
    add_column :ahomes, :adress, :string
  end
end
