export async function getServices(language) {
  try {
    const locale = `locale=${language}`;

    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/services?${locale}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  } catch (err) {
    throw err;
  }
}
