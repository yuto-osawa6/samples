class Addhometocolumsinihometitle < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :ititle, :string
    add_column :homes, :ititle2, :string

  end
end
