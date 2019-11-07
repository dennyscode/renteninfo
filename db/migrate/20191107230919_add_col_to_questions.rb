class AddColToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :rente_wunschalter, :integer
  end
end
