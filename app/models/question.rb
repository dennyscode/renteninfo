class Question < ApplicationRecord
    accepts_nested_attributes_for :rente_jobs, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true
    accepts_nested_attributes_for :rente_kinder_ges, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true

end
