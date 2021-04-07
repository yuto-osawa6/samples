class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :discribe
      t.text :image
      t.timestamps
    end
  end
end
