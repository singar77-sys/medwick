import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';

export const metadata = {
  title: 'Water Mitigation in Medina County, OH | Medwick Construction',
  description:
    'Water damage cleanup and mitigation from a crew based right in Medina County, not trucked in from Akron or Cleveland. Fast local response, honest documentation, and rebuild under the same roof.',
};

export default function WaterMitigation() {
  return (
    <>
      <Stub
        h1="Water Mitigation in Medina County, Ohio"
        purpose="Nobody local is fast here. Speed is our edge, and we prove it."
        outline={[
          '≥ 800 words; response-time PROOF element: stated in-county window, timestamped job examples, in-county vs regional arrival contrast',
          '24/7 line (only if operationally true)',
          'Sub-pages (cleanup, drying, mold prevention) come in Phase 2, emergency removal is live now',
          'Links up to water-claims and across to reconstruction',
        ]}
        links={[
          { href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' },
          { href: '/insurance-claims/water/', label: 'Water Claims' },
          { href: '/reconstruction/', label: 'Reconstruction' },
        ]}
      />
      <JsonLd
        data={service({
          name: 'Water Mitigation',
          description:
            'Emergency water removal, water damage cleanup, and structural drying across Medina County, Ohio.',
          path: '/water-mitigation/',
        })}
      />
    </>
  );
}
