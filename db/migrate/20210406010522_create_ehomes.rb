class CreateEhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :ehomes do |t|
      t.string :title
      t.text :discribe
      t.timestamps
    end
  end
end
