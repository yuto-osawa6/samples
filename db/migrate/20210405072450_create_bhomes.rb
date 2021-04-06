class CreateBhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :bhomes do |t|
      t.string :title
      t.string :title2
      t.string :discribe
      t.timestamps
    end
  end
end
