class AddColumnsToRentenrechners < ActiveRecord::Migration[6.0]
  def change
    add_column :rentenrechners, :rente_estimate, :integer
    add_column :rentenrechners, :rente_art, :integer
    add_column :rentenrechners, :rente_start, :integer
    add_column :rentenrechners, :rente_dauer, :integer
    add_column :rentenrechners, :rente_eink, :integer
    add_column :rentenrechners, :rente_reg, :int
    add_column :rentenrechners, :rente_kinder, :integer
    add_column :rentenrechners, :rente_kinder_gebjahr, :integer, array: true, default: []
    add_column :rentenrechners, :rente_betrieb, :integer
  end
end
