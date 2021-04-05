class AddColulmsAhomes < ActiveRecord::Migration[6.0]
  def change
    add_column :ahomes,:title2 ,:string
  end
end
