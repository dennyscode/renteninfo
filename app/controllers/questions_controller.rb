class QuestionsController < ApplicationController
    include QuestionsHelper
    def index
        @questions = Question.all
    end

    def show
        @question = Question.find(params[:id])
        @durchschnittsentgeltRV_2019 = 38901
        puts "#{@durchschnittsentgeltRV_2019} -- !!"
        @hilfsvar1 = hilfsvar1(@question.rente_start, @question.rente_kinder) #rente_vwerwerbsjahre
        @hilfsvar2 = hilfsvar2(@question.rente_reg) #rente_vreg
        @hilfsvar3 = hilfsvar3(@question.rente_eink, @durchschnittsentgeltRV_2019) #rente_ventgeltpunkte
        @hilfsvar4 = hilfsvar4(@question.rente_dauer) #rente_VBisZurRente
        @hilfsvar5 = hilfsvar5(@question.rente_estimate, @hilfsvar1, @hilfsvar4, @hilfsvar2) #rente_vBenoetigt
        @rente_heute = rente_heute(@hilfsvar2, @hilfsvar1, @hilfsvar5)
        @rente_fiktiv = rente_fiktiv(@hilfsvar5, @hilfsvar2, @hilfsvar1)
        @rente_notwendig = notwendiges_gehalt(@hilfsvar5, @durchschnittsentgeltRV_2019)
        @rente_notwendigJahre = notwendige_jahre(@question.rente_estimate, @hilfsvar3, @hilfsvar2, @hilfsvar1, @hilfsvar5, @durchschnittsentgeltRV_2019)
        @rente_hochrechnung = hochrechnung(@rente_heute, @hilfsvar3, @hilfsvar2, @hilfsvar4)
        @rente_hochrechnungMitAnpassung = hochrechnungMitAnpassung(@rente_heute, @hilfsvar3, @hilfsvar2,@question.rente_dauer,@hilfsvar4)
    end

    def rechner
        @question = Question.new
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
            params.require(:question).permit(:rente_estimate, :rente_art,:rente_zusatz, :rente_start,  :rente_dauer, :rente_eink, :rente_reg, :rente_kinder, :rente_betrieb, :rente_wunschalter, :rente_kinder_gebjahr => [], :rente_jobs => [:beginn, :ende, :art, :brutto])
            # params.permit(:beginn, :ende, :art, :brutto)
            # params.require(:question).permit(:rente_kinder_ges, rente_kinder_ges: [])
        end
end
