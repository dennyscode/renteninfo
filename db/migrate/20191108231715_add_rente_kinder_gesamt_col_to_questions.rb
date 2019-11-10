class AddRenteKinderGesamtColToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :rente_kinder_ges, :text, array: true, default: []
  end
end
