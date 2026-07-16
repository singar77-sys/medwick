import Link from 'next/link';
import Stub from '@/app/components/Stub';
import { CITIES, SERVICE_AREA_COMMUNITIES } from '@/lib/cities';

export const metadata = {
  title: 'Service Areas: Medina County, OH | Medwick Construction',
  description:
    'Storm, roof, and water damage help across Medina County: Medina, Brunswick, Wadsworth, Hinckley, Montville, Valley City, and every community in between, from a contractor based here.',
};

export default function ServiceAreas() {
  const linked = new Set(CITIES.map((c) => c.name));
  return (
    <>
      <Stub
        h1="Serving All of Medina County, Ohio"
        purpose="Based in Medina. Not dispatched from Akron or Cleveland."
        outline={[
          'City pages ship in waves, each with real local proof (anti-doorway gate)',
          'Wave 1 live at launch: Medina, Brunswick, Wadsworth',
          'Waves 2+: Montville, Hinckley, Valley City, Litchfield (zero-competition set), then the rest',
        ]}
      />
      <ul>
        {SERVICE_AREA_COMMUNITIES.map((name) => {
          const city = CITIES.find((c) => c.name === name);
          return (
            <li key={name}>
              {linked.has(name) && city ? (
                <Link href={`/service-areas/${city.slug}/`}>{name}</Link>
              ) : (
                name
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
