class CreateBhomes < ActiveRecord::Migration[6.0]
  def change
    create_table :bhomes do |t|

      t.timestamps
    end
  end
end
