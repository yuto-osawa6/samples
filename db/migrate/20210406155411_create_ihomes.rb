class CreateIhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :ihomes do |t|
      t.string :title
      t.string :title2
      t.string :title3
      t.timestamps
    end
  end
end
