import React from "react";
import FadeIn from "../animation/fade-in";

const PricingDescribe = () => {
  return (
    <div className="container py-12 lg:py-20">
      <FadeIn>
        <p className="text-xl mb-10">
          Die mtl. Paketpreise verstehen sich pro Standort, zzgl. MwSt. und Gebühren ext. Zahlungsanbieter . Diese Paketpreise gelten für
          Freizeit Anbieter mit einzelnen Erlebnissen (bitte kontaktieren Sie uns für ein maßgeschneidertes Angebot, wenn Sie anstelle von
          einzelnen Erlebnissen alternative Attraktionsangebote haben)
        </p>
      </FadeIn>
      <FadeIn>
        <p className="text-xl ">
          Wir glauben an unser Produkt sowie an faire Partnerschaften mit unseren Kunden auf Augenhöhe und benötigen daher keine langfristig
          bindenden Verträge. Dadurch wurden wir groß. QuinBook-Kunden können ihren Vertag monatlich kündigen.
        </p>
      </FadeIn>
    </div>
  );
};

export default PricingDescribe;
