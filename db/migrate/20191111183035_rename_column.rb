class RenameColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :questions, :rente_kinder_ges, :rente_jobs
  end
end
