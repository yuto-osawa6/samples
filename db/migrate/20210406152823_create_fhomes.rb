class CreateFhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :fhomes do |t|
      t.string :title
      t.string :title2
      t.string :discribe
      t.timestamps
    end
  end
end
