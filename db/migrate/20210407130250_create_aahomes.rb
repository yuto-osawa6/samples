class CreateAahomes < ActiveRecord::Migration[6.0]
  def change
    create_table :aahomes do |t|
      t.string :menu
      t.references :ahome, foreign_key: true
      t.timestamps
    end
  end
end
