class AddZusatzColToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :rente_zusatz, :integer
  end
end
