class CreateBbhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :bbhomes do |t|
      t.string :title
      t.string :discribe
      t.references :bhome
      t.timestamps
    end
  end
end
