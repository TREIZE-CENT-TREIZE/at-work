import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-primary h-14 text-white flex items-center gap-6 pl-3 z-10 flex-shrink-0">
        <Link href="/">
          <GoArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg text-center">Mentions légales</h1>
      </div>
      <main className="flex-1 overflow-auto p-4 text-sm pb-8">
        <div className="space-y-8">
          <div className="flex sm:justify-between gap-10 md:gap-2 ">
            <section className="w-1/2">
              <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
                SOCIÉTÉ ÉDITRICE
              </h2>
              <p className="font-bold">Catalyst Capital</p>
              <p>33 Cavendish Square</p>
              <p>London W1G 0PW</p>
              <p className="italic mt-2 text-gray-400">
                Ci-après nommé &quot;Le Client&quot;
              </p>
            </section>

            <section className="w-1/2">
              <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
                IMMEUBLE
              </h2>
              <p className="font-bold">@work</p>
              <p>6-10 rue Ampère</p>
              <p>93200 Saint-Denis</p>
              <p className="italic mt-2 text-gray-400">
                Ci-après nommé &quot;L&apos;immeuble&quot;
              </p>
            </section>
          </div>

          <section className="text-gray-500">
            <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
              GRAPHISME ET DÉVELOPPEMENT
            </h2>
            <p className="font-bold">Treize Cent Treize / Treize Interactif</p>
            <p>101 avenue de Villiers</p>
            <p>75017 Paris</p>
          </section>

          <section className="text-gray-500">
            <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
              DROIT APPLICABLE
            </h2>
            <p>L&apos;application est soumise au droit français</p>
          </section>

          <section className="text-gray-500">
            <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
              PROPRIÉTÉ INTELLECTUELLE
            </h2>
            <p className="text-justify">
              Cette application, de la ligne Yours imaginée par Treize
              Interactif, a été développée pour le compte de la société Catalyst
              Capital, conjointement par les sociétés Treize Cent Treize et
              Treize Interactif. Cette application est propriété{" "}
              <span className="italic">du client</span> pour un usage défini et
              spécifique dédié à <span className="italic">l&apos;immeuble</span>{" "}
              dans le cadre d&apos;une convention établie pour une durée
              d&apos;un an à compter du 1er janvier 2020.
            </p>
            <p className="text-justify mt-4">
              L&apos;ensemble de cette application, notamment les images,
              textes, logos, tableaux, représentations iconographiques et
              photographiques, relève de la législation française sur le droit
              d&apos;auteur et la propriété intellectuelle. La reproduction ou
              la représentation de tout ou partie de cette application, sur quel
              que support que ce soit, est donc formellement interdite sauf
              accord préalable écrit de Treize Interactif.
            </p>
          </section>

          <section className="text-gray-500">
            <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
              RESPONSABILITÉ
            </h2>
            <p className="text-justify">
              Les informations fournies sur cette application ne présentent pas
              de caractère contractuel. Les renseignements apportés dans cette
              application sont donnés à titre indicatif et ne sauraient engager
              les sociétés citées, propriétaires de leurs marques et de leurs
              logotypes.
            </p>
            <p className="text-justify mt-4">
              Alors même que Treize Cent Treize, pour le compte{" "}
              <span className="italic">du client</span>, a effectué toutes les
              démarches pour s&apos;assurer de la fiabilité des informations
              contenues sur cette application, les sociétés déclinent toute
              responsabilité pour toute information, inexactitude ou omission
              portant sur les informations disponibles sur cette application.
              Pour autant <span className="italic">le client</span>{" "}
              s&apos;engage, dès constatation d&apos;une défaillance, à mettre
              en place les procédures aux fins d&apos;y remédier. En outre,
              toute décision prise sur la foi de ces informations ne peut
              engager la responsabilité{" "}
              <span className="italic">du client</span>.
            </p>
            <p className="text-justify mt-4">
              L&apos;application est accessible 24 h/24 et 7 jours/7 via
              https://www.at-work.app. En cas de difficultés informatiques, de
              défaillances dues à la structure des réseaux de
              télécommunications, de problèmes techniques, ou pour des raisons
              de maintenance, sans que cette liste ne soit exhaustive,
              l&apos;accès à toute ou partie de cette application pourra être
              interrompu, suspendu ou supprimé sur simple décision{" "}
              <span className="italic">du client</span>.
            </p>
            <p className="text-justify mt-4">
              En aucun cas <span className="italic">le client</span>, Treize
              Cent Treize et Treize Interactif ne pourront être tenues
              responsables des dommages directs ou indirects résultant de
              l&apos;usage de cette application ou d&apos;autres sources de
              données et d&apos;informations qui lui sont liés.
            </p>
          </section>

          <section className="text-gray-500">
            <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
              CRÉDITS
            </h2>
            <p className="font-semibold">Conception/développement :</p>
            <a
              className="text-primary underline"
              href="https://www.treizecenttreize.fr"
            >
              Treize Cent Treize /{" "}
            </a>
            <a className="text-primary underline" href="https://www.13i.fr">
              Treize Interactif
            </a>
            <p className="mt-4 font-semibold">Reportage photos</p>

            <a
              className="text-primary underline"
              href="https://www.phototls.fr"
            >
              Thierry Lewenberg-Sturm
            </a>
          </section>

          <section className="text-gray-500">
            <h2 className="text-sm font-light p-2 rounded-md bg-primary mb-4 text-white">
              RESPONSABILITÉ TECHNIQUE
            </h2>
            <a
              className="text-primary underline"
              href="https://www.treizecenttreize.fr"
            >
              Treize Cent Treize /{" "}
            </a>
            <a className="text-primary underline" href="https://www.13i.fr">
              Treize Interactif
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
