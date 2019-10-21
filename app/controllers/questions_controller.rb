class QuestionsController < ApplicationController
    include QuestionsHelper
    def index
        @questions = Question.all
    end

    def show
        @question = Question.find(params[:id])
        hilfsvar1(@question.rente_estimate, @question.rente_art, @question.rente_start, @question.rente_dauer, @question.rente_eink, @question.rente_reg, @question.rente_kinder, @question.rente_kinder_gebjahr, @question.rente_betrieb)
        hilfsvar2(@question.rente_estimate, @question.rente_art, @question.rente_start, @question.rente_dauer, @question.rente_eink, @question.rente_reg, @question.rente_kinder, @question.rente_kinder_gebjahr, @question.rente_betrieb)
        hilfsvar3(@question.rente_estimate, @question.rente_art, @question.rente_start, @question.rente_dauer, @question.rente_eink, @question.rente_reg, @question.rente_kinder, @question.rente_kinder_gebjahr, @question.rente_betrieb)
    end

    def rechner

    end

    def create

        # byebug
        @questions = Question.new(questions_params)
        if @questions.save
            flash[:success] = "Questions were okay"
            redirect_to question_url(@questions)
        else
            render 'rechner'
        end
    end

    def new
        @questions = Question.new
    end

    def update
    end

    def destroy
    end

    private
        def questions_params
            params.permit(:rente_estimate, :rente_art, :rente_start, :rente_dauer, :rente_eink, :rente_reg, :rente_kinder, :rente_kinder_gebjahr, :rente_betrieb)
        end
end
