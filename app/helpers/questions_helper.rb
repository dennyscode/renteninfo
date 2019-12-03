module QuestionsHelper

    def job_params
        params[:rente_jobs].values.each.with_index do |val, index|
            puts "test #{index}, #{val}"
            temparray << ["#{val["beginn"]}, #{val["ende"]}, #{val["art"]}, #{val["brutto"]}"]
        end
    end

    def test
        puts "huhu"
    end

    # puts "#{rente_estimate}, #{rente_art}, #{rente_start}, #{rente_dauer}, #{rente_eink}, #{rente_reg}, #{rente_kinder}, #{rente_kinder_gebjahr}, #{rente_betrieb}"

    def hilfsvar1(rente_start, rente_kinder)
        rente_vwerwerbsjahre = Time.now.year.to_f - rente_start.to_f + (rente_kinder.to_f * 3)
        puts "Hilfsvariable 1) #{rente_vwerwerbsjahre}"
        return rente_vwerwerbsjahre
    end

    def hilfsvar2(rente_reg)
        rente_reg = rente_reg.to_f,

        if (rente_reg == 0 || rente_reg == 31.89)
            rente_vReg = 31.89
        else
            rente_vReg = 33.05
        end
        puts "Hilfsvariable 2) #{rente_vReg}"
        return rente_vReg
    end

    def hilfsvar3(rente_eink, durchschnittsentgeltRV)
        puts "Durchschnittsentgeld #{durchschnittsentgeltRV}"
        puts "rente_eink #{rente_eink}"
        rente_ventgeltpunkte = rente_eink.to_f.round(2) / durchschnittsentgeltRV.to_f
        puts "Hilfsvariable 3) #{rente_ventgeltpunkte}"
        return rente_ventgeltpunkte.round(2)
    end

    def hilfsvar4(rente_dauer)
        rente_dauer = rente_dauer.to_f
        rente_vBisZurRente = 67 - (Time.now.year.to_f + 1 - rente_dauer.to_f)
        return rente_vBisZurRente
    end

    def hilfsvar5(rente_vBisZurRente, rente_vReg)
        rente_vAnpassung = (rente_vReg * 1.01 ** rente_vBisZurRente) * rente_vBisZurRente
        return rente_vAnpassung.round(2)
    end

    def hilfsvar6( rente_estimate, rente_vwerwerbsjahre, rente_vBisZurRente, rente_vReg)
        rente_vBenoetigt = rente_estimate / (( rente_vwerwerbsjahre + rente_vBisZurRente) * rente_vReg )
        return rente_vBenoetigt.round(2)
    end

    def rente_heute(rente_vReg, rente_vwerwerbsjahre, rente_ventgeltpunkte)
        puts "Rente Entgeltpunkte #{rente_ventgeltpunkte.to_f}"
        puts "Rente VReg #{rente_vReg.to_f}"
        puts "Rente Erwerbsjahre #{rente_vwerwerbsjahre.to_f}"
        rente_vHeute = rente_ventgeltpunkte.to_f * rente_vReg.to_f.to_f * rente_vwerwerbsjahre.to_f
        return rente_vHeute.round(2)
    end

    def rente_fiktiv(rente_vBenoetigt, rente_vReg, rente_vwerwerbsjahre)
        rente_fiktiv = rente_vBenoetigt.to_f.round(2) * rente_vReg.to_f  * rente_vwerwerbsjahre.to_f.round(2)
        return rente_fiktiv.round(2)
    end

    def notwendiges_gehalt(rente_vBenoetigt, durchschnittsentgeltRV)
        rente_notwendig = durchschnittsentgeltRV.to_f * rente_vBenoetigt.to_f
        return rente_notwendig
    end

    def notwendige_jahre(rente_estimate, rente_ventgeltpunkte, rente_vReg)
        rente_notwendigJahre = rente_estimate.to_f.round(2) / (rente_ventgeltpunkte.to_f.round(2) * rente_vReg.to_f.round(2))
        return rente_notwendigJahre.round(2)
    end

    def hochrechnung(rente_heute, rente_ventgeltpunkte, rente_vReg, rente_vBisZurRente)
        rente_hochrechnung = rente_heute.to_f.round(2) + (rente_ventgeltpunkte.to_f.round(2) * rente_vReg.to_f * rente_vBisZurRente.to_f)
        return rente_hochrechnung.round(2)
    end

    def hochrechnungMitAnpassung(rente_heute, rente_ventgeltpunkte, rente_vAnpassung)
        puts "Hochrechnung Mit Anpassung: "
        puts "rente_heute: #{rente_heute}"
        puts "ventgeld: #{rente_ventgeltpunkte}"
        puts "vanpassung: #{rente_vAnpassung}"
        rente_hochrechnungMitAnpassung = rente_heute.to_f.round(2) + (rente_ventgeltpunkte.to_f.round(2) * rente_vAnpassung.to_f.round(2))
        puts "Rente_HochrechnungMitAnpassung #{rente_hochrechnungMitAnpassung}"
        return rente_hochrechnungMitAnpassung.round(2)
    end

end
