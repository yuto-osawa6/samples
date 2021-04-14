class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :btitle
      t.string :bdiscribe
      t.string :cutile
      t.string :cuiscribe

      t.timestamps
    end
  end
end
