module QuestionsHelper

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
            rente_vreg = 31.89
        else
            rente_vreg = 33.05
        end
        puts "Hilfsvariable 2) #{rente_vreg}"
        return rente_vreg
    end

    def hilfsvar3(rente_eink, durchschnittsentgeltRV)
        puts "Durchschnittsentgeld #{durchschnittsentgeltRV}"
        puts "rente_eink #{rente_eink}"
        rente_ventgeltpunkte = rente_eink.to_f / durchschnittsentgeltRV.to_f
        puts "Hilfsvariable 3) #{rente_ventgeltpunkte}"
        return rente_ventgeltpunkte
    end

    def hilfsvar4(rente_dauer)
        rente_dauer = rente_dauer.to_f
        rente_vBisZurRente = 67 - (Time.now.year.to_f + 1 - rente_dauer.to_f)
        return rente_vBisZurRente
    end

    def hilfsvar5(rente_estimate, rente_vwerwerbsjahre, rente_vBisZurRente, rente_vreg)
        rente_vBenoetigt = rente_estimate.to_f / ((rente_vwerwerbsjahre.to_f + rente_vBisZurRente.to_f) * rente_vreg.to_f)
        return rente_vBenoetigt
    end

    def rente_heute(rente_vreg, rente_vwerwerbsjahre, rente_vBenoetigt)
        rente_vHeute = rente_vBenoetigt.to_f * rente_vreg.to_f * rente_vwerwerbsjahre.to_f
        return rente_vHeute
    end

    def rente_fiktiv(rente_vBenoetigt, rente_vreg, rente_vwerwerbsjahre)
        rente_fiktiv = rente_vBenoetigt.to_f*rente_vreg.to_f/rente_vwerwerbsjahre.to_f
        return rente_fiktiv
    end

    def notwendiges_gehalt(rente_vBenoetigt, durchschnittsentgeltRV)
        rente_notwendig = durchschnittsentgeltRV.to_f * rente_vBenoetigt.to_f
        return rente_notwendig
    end

    def notwendige_jahre(rente_estimate, rente_ventgeltpunkte, rente_vreg, rente_vwerwerbsjahre, rente_vBisZurRente, durchschnittsentgeltRV)
        rente_notwendigJahre = rente_estimate.to_f / (durchschnittsentgeltRV.to_f * rente_vreg.to_f)
        return rente_notwendigJahre
    end

    def hochrechnung(rente_heute, rente_ventgeltpunkte, rente_vreg, rente_vBisZurRente)
        rente_hochrechnung = rente_heute.to_f + rente_ventgeltpunkte.to_f * rente_vreg.to_f * rente_vBisZurRente.to_f
        return rente_hochrechnung
    end

    def hochrechnungMitAnpassung(rente_heute, rente_ventgeltpunkte, rente_vreg, rente_dauer, rente_vBisZurRente)
        rente_hochrechnungMitAnpassung = rente_heute.to_f + rente_ventgeltpunkte.to_f*rente_vreg.to_f*1.01*(rente_dauer.to_f+67)-(Time.now.year.to_f+1)*rente_vBisZurRente.to_f
        return rente_hochrechnungMitAnpassung
    end

end
