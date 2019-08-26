class AddQuestionsToQuestions < ActiveRecord::Migration[6.0]
  def change
      add_column :questions, :rente_estimate, :integer
      add_column :questions, :rente_art, :integer
      add_column :questions, :rente_start, :integer
      add_column :questions, :rente_dauer, :integer
      add_column :questions, :rente_eink, :integer
      add_column :questions, :rente_reg, :int
      add_column :questions, :rente_kinder, :integer
      add_column :questions, :rente_kinder_gebjahr, :integer, array: true, default: []
      add_column :questions, :rente_betrieb, :integer
  end
end
