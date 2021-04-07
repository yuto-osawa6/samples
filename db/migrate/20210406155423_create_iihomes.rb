class CreateIihomes < ActiveRecord::Migration[6.0]
  def change
    create_table :iihomes do |t|
      t.string :title
      t.string :discribe
      t.string :colum1
      t.string :colum2
      t.string :colum3
      t.string :price
      # t.references :ihome,foreign_key: true
      t.timestamps
    end
  end
end
