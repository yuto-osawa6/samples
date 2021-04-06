class CreateEehomes < ActiveRecord::Migration[6.0]
  def change
    create_table :eehomes do |t|
      t.string :title
      t.text :discribe
      t.text :image
      t.references :ehome,foreign_key: true      
      t.timestamps
    end
  end
end
