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
        @hilfsvar5 = hilfsvar5(@hilfsvar4, @hilfsvar2) #rente_vAnpassung
        @hilfsvar6 = hilfsvar6(@question.rente_estimate, @hilfsvar1, @hilfsvar4, @hilfsvar2)
        @rente_jahrAktuell = Time.now.year.to_f
        @rente_heute = rente_heute(@hilfsvar2, @hilfsvar1, @hilfsvar3)
        @rente_fiktiv = rente_fiktiv(@hilfsvar6, @hilfsvar2, @hilfsvar1)
        @rente_notwendig = notwendiges_gehalt(@hilfsvar6, @durchschnittsentgeltRV_2019)
        @rente_notwendigJahre = notwendige_jahre(@question.rente_estimate, @hilfsvar3, @hilfsvar2)
        @rente_hochrechnung = hochrechnung(@rente_heute, @hilfsvar3, @hilfsvar2, @hilfsvar4)
        @rente_hochrechnungMitAnpassung = hochrechnungMitAnpassung(@rente_heute, @hilfsvar3, @hilfsvar5)
    end

    def rechner
        @question = Question.new
    end

    def create
        testvar = params[:rente_jobs]
        puts "#{testvar}"
        temparray = []
        params[:rente_jobs].values.each.with_index do |val, index|
            puts "test #{index}, #{val}"
            temparray << ["#{val["beginn"]}, #{val["ende"]}, #{val["brutto"]}"]
        end
        @questions = Question.new(questions_params)
        @questions.rente_jobs = temparray
        if @questions.save
            flash[:success] = "Questions were okay"
            redirect_to question_url(@questions)
        else
            render 'rechner'
        end
        # byebug
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
            params.require(:question).permit(
                :rente_estimate, 
                :rente_art,
                :rente_zusatz, 
                :rente_start,  
                :rente_dauer, 
                :rente_eink, 
                :rente_reg,
                :rente_kinder, 
                :rente_betrieb, 
                :rente_wunschalter,
                :rente_jobs => [
                    :start => [],
                    :ende => [],
                    :brutto => [],
                ],
                :rente_kinder_gebjahr => [],
                photos: {
                    photo: {
                    }
                }
            )
            # params.permit(:beginn, :ende, :art, :brutto)
            # params.require(:question).permit(:rente_kinder_ges, rente_kinder_ges: [])
        end
end
