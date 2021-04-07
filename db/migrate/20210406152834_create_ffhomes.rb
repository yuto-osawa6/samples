class CreateFfhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :ffhomes do |t|
      t.string :title
      t.string :discribe
      t.references :bhome
      t.timestamps
    end
  end
end
