class CreateAhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :ahomes do |t|

      t.string :title
      t.string :discribe
      t.string :button_right
      t.string :button_left


      t.text :url_right
      t.text :url_left
      t.timestamps
    end
  end
end
