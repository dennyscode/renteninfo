class Question < ApplicationRecord
    accepts_nested_attributes_for :question, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true
end
