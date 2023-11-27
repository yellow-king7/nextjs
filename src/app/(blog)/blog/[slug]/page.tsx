export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return <h1 className="text-5xl">this is {slug} page</h1>;
}
