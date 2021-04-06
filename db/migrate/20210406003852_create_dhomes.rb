class CreateDhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :dhomes do |t|
      t.string :title
      t.text :discribe
      t.string :title2
      t.text :discribe2
      t.timestamps
    end
  end
end
