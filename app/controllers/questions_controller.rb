class QuestionsController < ApplicationController
    def index
    end

    def show
    end

    def rechner
        @questions = Question.all
    end

end
