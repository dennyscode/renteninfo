class CreateRentenrechners < ActiveRecord::Migration[6.0]
  def change
    create_table :rentenrechners do |t|

      t.timestamps
    end
  end
end
