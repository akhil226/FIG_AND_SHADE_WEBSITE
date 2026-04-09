import { spacesData } from '@/data/spaces';
import SpaceClient from './SpaceClient';

export function generateStaticParams() {
  return spacesData.map((space) => ({
    slug: space.slug,
  }));
}

export default function SpaceDetail({ params }: { params: { slug: string } }) {
  return <SpaceClient slug={params.slug} />;
}
