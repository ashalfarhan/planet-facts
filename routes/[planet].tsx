import { asset, Head } from '$fresh/runtime.ts';
import planets from '@app/data.json' assert { type: 'json' };
import Header from '@app/islands/Header.tsx';
import Stats from '@app/components/Stats.tsx';
import { Handlers, PageProps } from '$fresh/server.ts';
import { Planet, PlanetLink } from '@app/types.ts';
import PlanetTabs from '@app/islands/PlanetTabs.tsx';

export const handler: Handlers<
  { planet: Planet; planetLinks: PlanetLink[] }
> = {
  GET(_req, ctx) {
    const planet = planets.find((p) => p.name === ctx.params.planet);
    if (!planet) {
      return ctx.renderNotFound();
    }
    return ctx.render({
      planet,
      planetLinks: planets.map((p) => ({
        name: p.name,
        accent_color: p.accent_color,
      })),
    });
  },
};

export default function Home(
  { data, url }: PageProps<
    { planet: Planet; planetLinks: PlanetLink[] }
  >,
) {
  const { planet, planetLinks } = data;
  return (
    <>
      <Head>
        <title>{planet.name}</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
         :root {
          --accent-color: ${planet.accent_color};
         }
         `,
          }}
        />
        <link rel='stylesheet' href={asset('styles.css')} />
      </Head>
      <div class='flex flex-col min-h-screen relative'>
        <Header url={url.pathname} links={planetLinks} />
        <main class='mx-auto container flex-1 flex flex-col'>
          <PlanetTabs planet={planet} />
          <section class='grid md:grid-cols-4 grid-cols-1 lg:gap-8 gap-4 lg:px-0 px-8 md:mt-0 mt-8 md:mt-0 mb-8'>
            <Stats label='ROTATION TIME' value={planet.rotation} />
            <Stats label='REVOLUTION TIME' value={planet.revolution} />
            <Stats label='RADIUS' value={planet.radius} />
            <Stats label='AVERAGE TEMP.' value={planet.temperature} />
          </section>
        </main>
      </div>
    </>
  );
}
