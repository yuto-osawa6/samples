class CreateChomes < ActiveRecord::Migration[6.0]
  def change
    create_table :chomes do |t|
      t.string :title
      t.string :title2
      t.text :discribe
      # t.references :bhome
      t.timestamps
    end
  end
end
