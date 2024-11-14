import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen flex flex-col pb-6">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/immeuble">
          <GoArrowLeft className="w-10 h-10 hover:bg-slate-100/20 rounded-full p-2" />
        </Link>
        <h1 className="text-lg text-center">Descriptif technique</h1>
      </div>
      <main className="flex-1 overflow-auto px-4 py-2">
        <div className="flex flex-col gap-0">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="flex flex-col gap-4 flex-1 order-2 lg:order-1 md:py-8 my-auto pl-4 md:pl-1 py-4">
              <h2 className="text-xl font-semibold">Privilégier le confort</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    Stores intérieurs automatiques connectés à la GTB avec
                    télécommandes, pour plus d&apos;économies et de confort
                    d&apos;usage
                  </span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    Terrasses et balcons accessibles à tous les niveaux
                  </span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>Jardin paysagé privatif</span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>Toiture végétalisée</span>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/bg-1.jpg"
                alt="Stores automatiques"
                fill
                className="object-cover  shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] order-1">
              <Image
                src="/bg-2.jpg"
                alt="Building exterior"
                fill
                className="object-cover  shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 order-2 md:py-8 my-auto pl-4 md:pl-1 py-4">
              <h2 className="text-xl font-semibold">
                Offrir un cadre de travail efficient
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    Contrôle d&apos;accès et caméra de vidéosurveillance
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-baseline">
                    <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                      <Image src="/check-circle.svg" alt="check" fill />
                    </div>
                    <span>Gestion Technique du Bâtiment :</span>
                  </div>
                  <div className="ml-8 flex flex-col gap-2">
                    <div className="flex gap-2 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>
                        gestion automatisée, supervision, contrôle des
                        différents équipements techniques
                      </span>
                    </div>
                    <div className="flex gap-2 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>programmation par zone</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>Faux plancher technique</span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    Éclairage LED générant une économie significative de coûts
                  </span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    Bureaux : éclairages commandés pour un système de gestion
                    locale constitué d&apos;un détecteur double technologie
                    (détecteur de présence et de luminosité)
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-baseline">
                    <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                      <Image src="/check-circle.svg" alt="check" fill />
                    </div>
                    <span>Sous-sol :</span>
                  </div>
                  <div className="ml-8 flex flex-col gap-2">
                    <div className="flex gap-3 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>
                        parking équipé de bornes de recharges pour voitures
                        électriques
                      </span>
                    </div>
                    <div className="flex gap-3 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>emplacement motos</span>
                    </div>
                    <div className="flex gap-3 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>vestiaires</span>
                    </div>
                    <div className="flex gap-3 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>local vélos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="flex flex-col gap-4 flex-1 order-2 lg:order-1 md:py-8 my-auto pl-4 md:pl-1 py-4">
              <h2 className="text-xl font-semibold">
                S&apos;inscrire dans une réduction de l&apos;empreinte
                écologique
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    Développement au sein de l&apos;ÉcoQuartier Universeine qui
                    bénéficie d&apos;une Certification HQE Aménagement
                  </span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    <strong>Certification BREEAM niveau Very Good</strong>,
                    garantissant un confort optimal aux utilisateurs. Cette
                    certification exige une conception et une réalisation
                    qualitativement plus exigeantes que les normes en vigueur
                    selon de nombreux critères (confort visuel, acoustique,
                    olfactif, qualité de l&apos;air…)
                  </span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>
                    <strong>Label WiredScore</strong>, garantissant aux usagers
                    le niveau de qualité de la connectivité et de la performance
                    numérique
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/bg-3.jpg"
                alt="Eco-friendly building"
                fill
                className="object-cover  shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] order-1">
              <Image
                src="/bg-4.jpg"
                alt="Building details"
                fill
                className="object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 order-2 md:py-8 my-auto pl-4 md:pl-1 py-4">
              <h2 className="text-xl font-semibold">Repères</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>Trame de façade : 1,35 m</span>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>Profondeur des plateaux : 18 m</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-baseline">
                    <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                      <Image src="/check-circle.svg" alt="check" fill />
                    </div>
                    <span>Hauteur libre des plateaux :</span>
                  </div>
                  <div className="ml-8 flex flex-col gap-2">
                    <div className="flex gap-3 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>sous dalle : 2,90 m</span>
                    </div>
                    <div className="flex gap-3 items-baseline">
                      <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                        <Image src="/check-circle.svg" alt="check" fill />
                      </div>
                      <span>sous partie centrale : 2,55 m</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-baseline">
                  <div className="min-w-4 min-h-4 flex-shrink-0 relative">
                    <Image src="/check-circle.svg" alt="check" fill />
                  </div>
                  <span>Effectif par niveaux : 80 personnes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
